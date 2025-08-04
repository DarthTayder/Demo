import { quoteForm } from "./formConfig.ts";

// Sample data
const sampleData = {
  fullName: "Taylor S",
  age: 30,
  hasAccidents: true,
};

// Iterate over each field in the form
quoteForm.fields.forEach((field) => {
  // Determine if the field should be visible with the 'visibleIf' condition
  const visible = field.visibleIf ? field.visibleIf(sampleData) : true;

  // If the field is visible, log its label and type to the console
  if (visible) {
    console.log(`${field.label}: [${field.type}]`);
  }
});
