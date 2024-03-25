import {type Metadata} from "next";

import {PageWrapper} from "@/components/page-wrapper";
import {H1} from "@/components/typography";
import {siteData} from "@/config/site-data";
import {getProfile} from "@/handlers/user";

export const metadata: Metadata = {
  title: `${siteData.title} | Create new destinations`,
  description: `${siteData.description} | Create new destinations`,
};

async function createDestination(formData: FormData) {
  "use server";
  let name = formData.get("name");
  let image = formData.get("image");
  let description = formData.get("description");
  let userId = formData.get("user-id");
  console.log({
    name,
    image,
    description,
    userId,
  });
}

export default async function NewDestinationPage() {
  let user = await getProfile();
  return (
    <PageWrapper>
      <H1 className="my-10">Create new destination</H1>
      <section className="mx-auto w-full max-w-2xl border">
        <form action={createDestination}>
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

            <button type="submit">Create</button>
          </fieldset>
        </form>
      </section>
    </PageWrapper>
  );
}
