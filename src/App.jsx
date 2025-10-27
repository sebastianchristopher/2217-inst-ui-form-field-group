import React from "react";
import { InstUISettingsProvider } from "@instructure/ui";
import { canvas } from "@instructure/ui-themes";
import { FormField, FormFieldGroup } from "@instructure/ui-form-field";
import { TextInput } from "@instructure/ui-text-input";
import { TextArea } from "@instructure/ui-text-area";

export default function App() {
  return (
    <InstUISettingsProvider theme={canvas}>
      <>
        <h2>Group-level disabled (does NOT disable children)</h2>
        <FormFieldGroup description="Group w/ disabled" disabled>
          <FormField label="Name">
            <TextInput />
          </FormField>
          <FormField label="Message">
            <TextArea />
          </FormField>
        </FormFieldGroup>

        <h2>Per-input (does disable)</h2>
        <FormFieldGroup description="Per-input disabled">
          <FormField label="Name">
            <TextInput interaction="disabled" />
          </FormField>
          <FormField label="Message">
            <TextArea disabled="true" />
          </FormField>
        </FormFieldGroup>

        <h2>&lt;fieldset disabled&gt; (does disable)</h2>
        <fieldset disabled>
          <FormFieldGroup description="Native fieldset">
            <FormField label="Name">
              <TextInput />
            </FormField>
            <FormField label="Message">
              <TextArea />
            </FormField>
          </FormFieldGroup>
        </fieldset>
      </>
    </InstUISettingsProvider>
  );
}
