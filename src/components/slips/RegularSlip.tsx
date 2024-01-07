import type { Template } from "@pdfme/common";
import { generate } from "@pdfme/generator";
import { image, text } from "@pdfme/schemas";
import regularSlipTemplate from "@/lib/templates/regularSlipTemplate.json";
import { Font } from "@/types/pdfme";
import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";

const RegularSlip = async () => {
  const template: Template = regularSlipTemplate;

  const { response } = useSelector((store: RootState) => store.service);
  console.log(response, "response-----");
  const {
    surname,
    firstname,
    middlename,
    residence_town,
    residence_state,
    residence_address,
    trackingId,
    nin,
    photo,
    gender,
  } = response.data;

  const inputs = [
    {
      surname,
      firstname,
      middlename,
      gender: gender.toUpperCase(),
      residenceAddress: residence_address,
      residenceTown: residence_town,
      residenceState: residence_state,
      trackingId: trackingId,
      nin,
      photo: `data:image/jpeg;base64,${photo}`,
    },
  ];

  const fetchFont = async () => {
    const font: Font = {
      Calibri: {
        data: await fetch("../../../fonts/CalibriRegular.ttf").then((res) =>
          res.arrayBuffer()
        ),
        fallback: true,
      },
    };

    return font;
  };

  const generatePDF = async () => {
    try {
      const font = await fetchFont();

      const pdf = await generate({
        template,
        inputs,
        plugins: {
          text,
          image,
        },
        options: { font },
      });

      const blob = new Blob([pdf.buffer], { type: "application/pdf" });
      window.open(URL.createObjectURL(blob));
    } catch (error) {
      console.log(error);
    }
  };

  return await generatePDF();
};

export default RegularSlip;
