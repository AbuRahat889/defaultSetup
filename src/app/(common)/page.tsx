"use client";

import UploadMedia from "@/components/ui/ImageUpload";
import { FormProvider, useForm } from "react-hook-form";

export default function Home() {
  const methods = useForm<{ photos: string[] }>();
  const handleUpload = async (formData: FormData): Promise<string[] | void> => {
    console.log(formData);
    // const res = await uploadFile(formData).unwrap();

    // return res?.success ? res?.data?.images : [];
  };
  const onSubmit = (data: { photos: string[] }) => {
    console.log("Uploaded URLs:", data.photos);
  };

  return (
    <div>
      <h1 className="bg-backgroundColor text-textColor container mx-auto">
        this is home page{" "}
      </h1>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="p-6">
          <UploadMedia name="photos" onUpload={handleUpload} />
          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
