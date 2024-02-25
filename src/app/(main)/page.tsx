import {Heading, Text} from "@radix-ui/themes";

import {PageWrapper} from "@/components/page-wrapper";

function HomePage() {
  return (
    <PageWrapper>
      <aside>
        <Heading as="h1" size="9">
          Trip Talks
        </Heading>
        <Text as="p">
          Welcome to Trip Talks, a social network for travelers.
        </Text>
      </aside>
    </PageWrapper>
  );
}

export default HomePage;
