import {type Metadata} from "next";

import {PageWrapper} from "@/components/page-wrapper";
import {H1} from "@/components/typography";
import {siteData} from "@/config/site-data";
import {getProfile, type UserProfile} from "@/handlers/user";

import {createTrip} from "./actions";
import {SubmitButton} from "./submit-button";

export const metadata: Metadata = {
  title: `${siteData.title} | Create new trips`,
  description: `${siteData.description} | Create new trips`,
};

export default async function NewTripPage() {
  let user = await getProfile();
  return (
    <PageWrapper>
      <H1 className="my-10">Create new trips</H1>
      <section className="mx-auto w-full max-w-2xl p-2">
        <CreateTripForm user={user} />
      </section>
    </PageWrapper>
  );
}

function CreateTripForm({user}: {user: Awaited<UserProfile>}) {
  return (
    <form action={createTrip}>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="image">image</label>
        <select name="image" id="image" required>
          <option value="london">London</option>
          <option value="paris">Paris</option>
          <option value="nyc">New York City</option>
        </select>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" required></textarea>
        <input type="hidden" name="user-id" value={user.id} />
        <SubmitButton>Create trip</SubmitButton>
      </fieldset>
    </form>
  );
}
