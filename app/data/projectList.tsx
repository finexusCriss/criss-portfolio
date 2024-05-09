// ProjectCover
import FLCover from '../assets/images/FaceLiveness.png';
import ESig from '../assets/images/ElectronicSignature.png';
import Fido2Cover from '../assets/images/Fido2Cover.png';
import DigIden from '../assets/images/DigitalIdentity.png';
import TraIti from '../assets/images/TravelItinerary.png';
import TraBud from '../assets/images/TravelBudgetApp.png';

interface ProjectList {
  projectCoverImg: string;
  projectName: string;
  route: string;
}

const projectList: ProjectList[] = [
  {
    projectCoverImg: FLCover,
    projectName: 'Face Liveness Verification',
    route: '/project/faceliveness',
  },
  {
    projectCoverImg: ESig,
    projectName: 'Electronic Signature',
    route: '/project/esign',
  },
  {
    projectCoverImg: Fido2Cover,
    projectName: 'FIDO2',
    route: '/project/fido2',
  },
  {
    projectCoverImg: DigIden,
    projectName: 'Digital Identity',
    route: '/project/dgid',
  },
  {
    projectCoverImg: TraIti,
    projectName: 'Travel Itinerary Web App',
    route: '/project/travelitinerary',
  },
  {
    projectCoverImg: TraBud,
    projectName: 'Travel Budget Web App',
    route: '/project/travelbudget',
  },
]

export default projectList;