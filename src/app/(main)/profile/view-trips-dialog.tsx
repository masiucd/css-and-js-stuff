"use client";
import {type PropsWithChildren} from "react";

import {Dialog} from "@/components/dialog";
import {H2} from "@/components/typography";

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
        <div className="min-w-[28rem] p-2 sm:min-w-[30rem]  md:min-w-[48rem] md:p-5">
          {children}
        </div>
        <div className="flex  justify-end">
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
