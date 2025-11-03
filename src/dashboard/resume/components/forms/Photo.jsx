import React, { useContext, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { useParams } from 'react-router-dom'
import LocalStorageApi from './../../../../../service/LocalStorageApi'
import { toast } from 'sonner'
import { LoaderCircle, Upload, X, User } from 'lucide-react'

function Photo({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [photoUrl, setPhotoUrl] = useState(resumeInfo?.photo || '');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const params = useParams();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast.error('File size should be less than 5MB');
        return;
      }

      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }

      setUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        setPhotoUrl(base64);
        setResumeInfo({
          ...resumeInfo,
          photo: base64
        });
        setUploading(false);
        toast.success('Photo uploaded successfully!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setPhotoUrl(url);
    setResumeInfo({
      ...resumeInfo,
      photo: url
    });
  };

  const removePhoto = () => {
    setPhotoUrl('');
    setResumeInfo({
      ...resumeInfo,
      photo: ''
    });
    toast.success('Photo removed');
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        photo: photoUrl
      }
    };

    LocalStorageApi.UpdateResumeDetail(params?.resumeId, data).then(resp => {
      enabledNext(true);
      setLoading(false);
      toast('Photo updated successfully!');
    }).catch((error) => {
      console.error('Error updating photo:', error);
      setLoading(false);
      toast.error('Failed to update photo');
    });
  };

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Profile Photo</h2>
      <p>Add a professional photo to your resume (optional)</p>

      <div className='mt-5 space-y-6'>
        {/* Photo Preview */}
        <div className='flex justify-center'>
          <div className='relative'>
            {photoUrl ? (
              <div className='relative'>
                <img 
                  src={photoUrl} 
                  alt="Profile" 
                  className='w-32 h-32 rounded-full object-cover border-4 border-primary/20'
                  onError={() => {
                    toast.error('Failed to load image');
                    setPhotoUrl('');
                  }}
                />
                <button
                  onClick={removePhoto}
                  className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600'
                >
                  <X className='h-4 w-4' />
                </button>
              </div>
            ) : (
              <div className='w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-gray-300'>
                <User className='h-12 w-12 text-gray-400' />
              </div>
            )}
          </div>
        </div>

        {/* Upload Options */}
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium mb-2'>Upload Photo</label>
            <div className='flex items-center gap-3'>
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className='flex-1'
                disabled={uploading}
              />
              <Button 
                variant="outline" 
                disabled={uploading}
                className='flex gap-2'
              >
                {uploading ? (
                  <LoaderCircle className='h-4 w-4 animate-spin' />
                ) : (
                  <Upload className='h-4 w-4' />
                )}
                Upload
              </Button>
            </div>
            <p className='text-xs text-gray-500 mt-1'>
              Supported formats: JPG, PNG, GIF (Max 5MB)
            </p>
          </div>

          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-white px-2 text-gray-500'>Or</span>
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium mb-2'>Photo URL</label>
            <Input
              type="url"
              placeholder="https://example.com/photo.jpg"
              value={photoUrl}
              onChange={handleUrlChange}
            />
            <p className='text-xs text-gray-500 mt-1'>
              Enter a direct link to your photo
            </p>
          </div>
        </div>

        {/* Tips */}
        <div className='bg-blue-50 p-4 rounded-lg'>
          <h4 className='font-semibold text-blue-800 mb-2'>Photo Tips:</h4>
          <ul className='text-sm text-blue-700 space-y-1'>
            <li>• Use a professional headshot with good lighting</li>
            <li>• Face should be clearly visible and centered</li>
            <li>• Dress professionally as you would for an interview</li>
            <li>• Avoid selfies, group photos, or casual pictures</li>
            <li>• Square aspect ratio works best</li>
          </ul>
        </div>
      </div>

      <div className='mt-6 flex justify-end'>
        <Button 
          onClick={onSave} 
          disabled={loading}
          className='flex gap-2'
        >
          {loading ? <LoaderCircle className='animate-spin h-4 w-4' /> : 'Save Photo'}
        </Button>
      </div>
    </div>
  )
}

export default Photo