"use client";

import {Text} from "@radix-ui/themes";
import {type PropsWithChildren} from "react";
import {useFormStatus} from "react-dom";

import {Button} from "@/components/button";

export function SubmitButton({children}: PropsWithChildren) {
  const status = useFormStatus();
  return (
    <Button type="submit" aria-disabled={status.pending}>
      <Text
        as="span"
        size="3"
        weight="medium"
        className="capitalize text-gray-100"
      >
        {children}
      </Text>
    </Button>
  );
}
