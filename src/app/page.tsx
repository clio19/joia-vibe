"use client"

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const Page = () => {

  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success(" Job stated")
    }
  }));

  return (
  <>

  <div className="p-4 max-w-7xl">
  
    <Button disabled={invoke.isPending} onClick={() => invoke.mutate({ text: " ANAAA"})}>
      Invoke Background job
    </Button>
  </div>
  </>
);

}


export default Page;