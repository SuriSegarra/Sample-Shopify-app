import React, { useState } from "react";
// using useState to manage the opening and closing of the model for the resource picker
import { EmptyState, Layout, Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

function Index() {
  const [modal, setModal] = useState({ open: false });

  return (
    <Page>
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        // este open es el que esta dentro del state
        open={modal.open}
        // when somebody clicks that they dont want to take a products anymore, be able to close that
        onCancel={() => setModal({ open: false })}
      />
      <Layout>
        <EmptyState
          heading="Manage your inventory transfers"
          action={{
            content: "Select Products",
            onAction: () => setModal({ open: true }),
          }}
          image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
        >
          <p>Select products</p>
        </EmptyState>
      </Layout>
    </Page>
  );
}

export default Index;
