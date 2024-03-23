"use client";

import * as RadixDialog from "@radix-ui/react-dialog";
import {type PropsWithChildren} from "react";

import {cn} from "@/lib/cn";

export function Dialog({
  children,
  className,
  triggerText,
}: PropsWithChildren<{className?: string; triggerText: string}>) {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>
        <button
          className={cn(
            "rounded bg-gray-900/80 px-4 py-2 font-bold text-white hover:bg-primary-700",
            className,
          )}
        >
          {triggerText}
        </button>
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 bg-gray-900/55" />
        <RadixDialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}

function Title({children, className}: PropsWithChildren<{className?: string}>) {
  return (
    <RadixDialog.Title className={cn("", className)}>
      {children}
    </RadixDialog.Title>
  );
}
function Description({
  children,
  className,
}: PropsWithChildren<{className?: string}>) {
  return (
    <RadixDialog.Description className={cn("", className)}>
      {children}
    </RadixDialog.Description>
  );
}

function Close({children, className}: PropsWithChildren<{className?: string}>) {
  return (
    <RadixDialog.Close asChild className={cn("", className)}>
      {children}
    </RadixDialog.Close>
  );
}

Dialog.Title = Title;
Dialog.Description = Description;
Dialog.Close = Close;
