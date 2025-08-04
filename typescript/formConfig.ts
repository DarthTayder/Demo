export const quoteForm = {
    // Defines the fields for a quote form
    fields: [
      {
        // key used to identify and link this field to form data
        name: "fullName",
  
        // Label shown to users on the form UI
        label: "Full Name",
  
        // Type of input expected
        type: "text",
  
        // Marks this field as required true or false
        required: true,
      },
      {
        name: "age",
        label: "Age",
        type: "number",
        required: true,
      },
      {
        name: "hasAccidents",
        label: "Have you had any accidents?",
        type: "boolean",
        required: true,
      },
      {
        name: "accidentDetails",
        label: "Accident Details",
        type: "text",
  
        // only show this field if the user indicated they have had accidents
        visibleIf: (formData: any) => formData.hasAccidents === true,
      },
    ],
  };
  