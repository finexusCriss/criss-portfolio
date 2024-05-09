import BodyIllusTitleBodyLayout from "~/components/layout/BodyIllusTitleBodyLayout";
import BodyLightBlueBg from "~/components/layout/BodyLightBlueBg";
import MainLightBlueBg from "~/components/layout/MainLightBlueBg";
import MainTitleCaptionBodyLayout from "~/components/layout/MainTitleCaptionBodyLayout";
import SecondaryBlueBg from "~/components/layout/SecondaryBlueBg";
import ElecSigCov from "../assets/images/ElectonicSigProjCov.png";
import PDFIcon from "../assets/images/PDF.png";
import ReactPDFIcon from "../assets/images/ReactPDF.png";
import ResizableIcon from "../assets/images/Resizable.png";

export default function ElectronicSignature() {
  return (
    <>
      <MainLightBlueBg>
        <MainTitleCaptionBodyLayout
          mainTitleLineOne="Electronic signature"
          date='June 2023'
          body='Initiate a document signature easily by just feeling in the signee info, and they can read and sign it by just using a browser. An audit trail is generated programatically to ensure the reliability of the signing process.'
        />

        <div className="">
          <img src={ElecSigCov} alt="Electronic Signature Cover" />
        </div>
      </MainLightBlueBg>

      <SecondaryBlueBg>
        <BodyIllusTitleBodyLayout
          illus={
            <div className="grid grid-rows-1 grid-cols-2 gap-2">
              <img src={PDFIcon} alt="PDF Icon" className="w-36" />
              <img src={ReactPDFIcon} alt="React PDF Icon" className="w-32" />
            </div>
          }
          title='PDF Viewer and React PDF'
          body='Once user has drag and drop or upload the PDF file they would like to sign, the PDF preview is shown almost instantly, besides, the PDF viewer is able to resize according to window size, which is not something natively built by the library. React PDF is being used to create a page in PDF programatically, showing the audit trail of the signing process.'
        />
      </SecondaryBlueBg>

      <BodyLightBlueBg>
        <BodyIllusTitleBodyLayout
          illus={
            <img src={ResizableIcon} alt="Resizable Icon" className="w-32" />
          }
          title='A signature canvas that’s resizable'
          body='Signature canvas has one common problem that it will lose its content after resizing, which might be possible when user resizes the window. In this version, not only a watermark is drawn on the canvas, but the problem of vanishing signature is solved, no matter how you resize the signature is still there.'
        />
      </BodyLightBlueBg>
    </>
  )
}