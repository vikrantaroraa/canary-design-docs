import React from "react";
import { FileUpload } from "canary-design";

function FileUploadExample() {
  // This component is used to showcase the "FileUpload" component when dragging is disabled, hence we are not
  // passing the "dragging" prop here.
  return (
    <div>
      <FileUpload
        multiple
        getFiles={(files: unknown) => {
          console.log("files from getFiles: ", files);
        }}
        showImageWall={true}
        showDeleteIcon={true}
      />
    </div>
  );
}

export { FileUploadExample };
