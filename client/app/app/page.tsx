import React from 'react';
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import { FolderIcon } from 'lucide-react';

export default function ProtectedPage() {

  return (
  <div className="flex flex-col p-4">
    Protected Page 
    <Empty className='gap-0 '>
      <EmptyHeader>
          <FolderIcon className="w-14 h-14 p-3 bg-muted rounded-md" />
      </EmptyHeader>
      <EmptyTitle className='text-lg mt-2'>No files yet</EmptyTitle>
      <EmptyDescription className='max-w-100'>
        Get started by uploading a file or creating a new document. Your documents will appear here for easy access and management.
      </EmptyDescription>
    </Empty>
  </div>
  );
}
