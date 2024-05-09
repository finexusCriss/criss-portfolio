import SiteLogo from '../assets/images/SiteLogo.png';
import ResumeImage from '../assets/images/ResumeImage.png';
import { Link } from '@remix-run/react';
import { useState, useRef, useEffect } from 'react';
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [navBarHeight, setNavBarHeight] = useState(0);
  const navbarRef = useRef(null); // Create a ref for the navbar div

  useEffect(() => {
    // Function to get the height of the navbar div and set it to the state
    const handleResize = () => {
      if (navbarRef.current) {
        const height = navbarRef.current.clientHeight;
        setNavBarHeight(pxToRem(height));
        console.log('Navbar height:', height);
        console.log('in rem', pxToRem(height));
        // You can then use this height as needed, e.g., setting state or directly using it
      }
    };

    // Call the function initially and on window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pxToRem = (pxValue: number) => {
    // Get the base font size in pixels
    const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    // Calculate the value in rems
    const remValue = pxValue / baseFontSize;
    return remValue;
  }

  return (
    <>
      <div ref={navbarRef} className="bg-primary-blue text-white flex justify-between items-center py-5 px-10 lg:px-12">
        <Link to='/'>
          <div className="flex justify-content items-center">
            <div>
              <img src={SiteLogo} alt="SiteLogo" className="w-12 mr-4" />
            </div>
            <div className="font-pacifico text-2xl">TSY</div>
          </div>
        </Link>

        {/* Menu */}
        <div className="justify-between items-center gap-6 font-notoSerifJPMedium hidden md:flex">
          <Link to='/about'>
            <div>About</div>
          </Link>
          <Link to='/project'>
            <div>Project</div>
          </Link>
          <Link to='/contact'>
            <div>Contact</div>
          </Link>
          <div className="flex justify-content items-center bg-white p-2 rounded-md">
            <img src={ResumeImage} alt="ResumeIcon" className="w-4 mr-2 shadow-md" />
            <div className="text-primary-blue">Resume</div>
          </div>
        </div>

        <div className="md:hidden ">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                // className={`fixed left-0 right-0 top-[${navBarHeight}rem] p-5 bg-[#367bc1] z-50`}
                className={`fixed left-0 right-0 top-[5.5rem] p-5 bg-[#367bc1] z-50`}
              >
                <div className='grid gap-3 place-items-center text-center font-notoSerifJPMedium'>
                  <Link to='/about' className='border-b-0.8 border-white pb-2 w-full' onClick={() => setOpen(false)}>
                    About
                  </Link>
                  <Link to='/project' className='border-b-0.8 border-white pb-2 w-full' onClick={() => setOpen(false)}>
                    Project
                  </Link >
                  <Link to='/contact' className='border-b-0.8 border-white pb-2 w-full' onClick={() => setOpen(false)}>
                    Contact
                  </Link>
                  <Link to='/about' onClick={() => setOpen(false)}>
                    Resume
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
