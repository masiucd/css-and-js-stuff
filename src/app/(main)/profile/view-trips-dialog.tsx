"use client";
import {type PropsWithChildren} from "react";

import {Dialog} from "@/components/dialog";
import {H2, Lead} from "@/components/typography";

export function ViewTripsDialog({
  children,
  totalTrips,
}: PropsWithChildren<{totalTrips: number}>) {
  return (
    <>
      <Dialog
        triggerComponent={
          <button
            className="font-semibold underline hover:opacity-50"
            type="button"
          >
            view trips ({totalTrips})
          </button>
        }
      >
        <Dialog.Title>
          <H2>Your Trips</H2>
        </Dialog.Title>
        <Dialog.Description>
          <Lead>Here are the trips yo&apos;ve saved.</Lead>
        </Dialog.Description>
        {children}
        <div className="flex justify-end ">
          <Dialog.Close>
            <button className="rounded bg-gray-900/80 px-4 py-2 font-bold text-white hover:bg-primary-700">
              Close
            </button>
          </Dialog.Close>
        </div>
      </Dialog>
    </>
  );
}
