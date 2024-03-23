"use client";
import {Dialog} from "@/components/dialog";
import {H3, Lead} from "@/components/typography";

export function ViewTripsDialog() {
  return (
    <>
      <Dialog triggerText="View Trips">
        <Dialog.Title>
          <H3>Your Trips</H3>
        </Dialog.Title>
        <Dialog.Description>
          <Lead>Here are the trips yo&apos;ve saved.</Lead>
        </Dialog.Description>
        <div className="flex flex-col">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            quasi possimus ut ex mollitia itaque temporibus aspernatur, illum
            qui quibusdam asperiores quisquam. Odit omnis doloremque itaque
            beatae voluptas vel impedit.
          </p>

          <div className="flex justify-end ">
            <Dialog.Close>
              <button className="rounded bg-gray-900/80 px-4 py-2 font-bold text-white hover:bg-primary-700">
                Close
              </button>
            </Dialog.Close>
          </div>
        </div>
      </Dialog>
    </>
  );
}
