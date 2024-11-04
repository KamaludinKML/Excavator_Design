import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
  LogoControls,
  AxisCompas,
} from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState("");
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    excavator: true,
  });

  const selectedDecalId = snap.selectedDecalId;

  const getSelectedDecalProps = () => {
    switch (selectedDecalId) {
      case "logoTexture":
        return {
          rotation: snap.logoRotation,
          scale: snap.logoScale,
          position: snap.logoPosition,
        };
      case "additionalLogoTexture":
        return {
          rotation: snap.additionalLogoRotation,
          scale: snap.additionalLogoScale,
          position: snap.additionalLogoPosition,
        };
      case "Logotexture3":
        return {
          rotation: snap.LogoRotation3,
          scale: snap.LogoScale3,
          position: snap.LogoPosition3,
        };
      case "LogoTexture4":
        return {
          rotation: snap.LogoRotation4,
          scale: snap.LogoScale4,
          position: snap.LogoPosition4,
        };
      case "LogoTexture5":
        return {
          rotation: snap.LogoRotation5,
          scale: snap.LogoScale5,
          position: snap.LogoPosition5,
        };
      case "LogoTexture6":
        return {
          rotation: snap.LogoRotation6,
          scale: snap.LogoScale6,
          position: snap.LogoPosition6,
        };
      default:
        return null;
    }
  };

  const selectedDecalProps = getSelectedDecalProps();

  const [logoRotation, setLogoRotation] = useState(state.logoRotation);
  const [logoScale, setLogoScale] = useState(state.logoScale);
  const [logoPosition, setLogoPosition] = useState(state.logoPosition);

  useEffect(() => {
    if (selectedDecalProps) {
      setLogoRotation(selectedDecalProps.rotation);
      setLogoScale(selectedDecalProps.scale);
      setLogoPosition(selectedDecalProps.position);
    }
  }, [selectedDecalId]);

  const handleRotationChange = (axis, value) => {
    if (!selectedDecalProps) return;
    const newRotation = [...logoRotation];
    newRotation[axis] = parseFloat(value);
    setLogoRotation(newRotation);
    switch (selectedDecalId) {
      case "logoTexture":
        state.logoRotation = newRotation;
        break;
      case "additionalLogoTexture":
        state.additionalLogoRotation = newRotation;
        break;
      case "LogoTexture3":
        state.LogoRotation3 = newRotation;
        break;
      case "LogoTexture4":
        state.LogoRotation4 = newRotation;
        break;
      case "LogoTexture5":
        state.LogoRotation5 = newRotation;
        break;
      case "LogoTexture6":
        state.LogoRotation6 = newRotation;
        break;
      default:
        break;
    }
  };

  const handleScaleChange = (value) => {
    if (!selectedDecalProps) return;
    const newScale = parseFloat(value);
    setLogoScale(newScale);
    switch (selectedDecalId) {
      case "logoTexture":
        state.logoScale = newScale;
        break;
      case "additionalLogoTexture":
        state.additionalLogoScale = newScale;
        break;
      case "LogoTexture3":
        state.LogoScale3 = newScale;
        break;
      case "LogoTexture4":
        state.LogoScale4 = newScale;
        break;
      case "LogoTexture5":
        state.LogoScale5 = newScale;
        break;
      case "LogoTexture6":
        state.LogoScale6 = newScale;
        break;
      default:
        break;
    }
  };

  const handlePositionChange = (axis, value) => {
    if (!selectedDecalProps) return;
    const newPosition = [...logoPosition];
    newPosition[axis] = parseFloat(value);
    setLogoPosition(newPosition);
    switch (selectedDecalId) {
      case "logoTexture":
        state.logoPosition = newPosition;
        break;
      case "additionalLogoTexture":
        state.additionalLogoPosition = newPosition;
        break;
      case "additionalLogoTexture1":
        state.additionalLogoPosition1 = newPosition;
        break;
      case "LogoTexture3":
        state.LogoPosition3 = newPosition;
        break;
      case "LogoTexture4":
        state.LogoPosition4 = newPosition;
        break;
      case "LogoTexture5":
        state.LogoPosition5 = newPosition;
        break;
      case "LogoTexture6":
        state.LogoPosition6 = newPosition;
        break;
      default:
        break;
    }
  };

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "logocontrols":
        return selectedDecalId ? (
          <LogoControls
            logoRotation={logoRotation}
            handleRotationChange={handleRotationChange}
            logoScale={logoScale}
            handleScaleChange={handleScaleChange}
            logoPosition={logoPosition}
            handlePositionChange={handlePositionChange}
            closeControls={() => setActiveEditorTab("")}
            selectedDecalId={selectedDecalId}
          />
        ) : (
          <p className="absolute left-full ml-9 bg-white radius p-4 shadow-lg rounded">
            Pilih decal terlebih dahulu untuk mengedit.
          </p>
        );
      default:
        return null;
    }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "excavator":
        state.isLogoTexture = !activeFilterTab[tabName];
        state.isAdditionalLogoTexture = !activeFilterTab[tabName];
        state.isLogoTexture3 = !activeFilterTab[tabName];
        state.isLogoTexture4 = !activeFilterTab[tabName];
        state.isLogoTexture5 = !activeFilterTab[tabName];
        state.isLogoTexture6 = !activeFilterTab[tabName];
        break;
      default:
       
        state.isLogoTexture = false;
        state.isAdditionalLogoTexture = false;
        state.isLogoTexture3 = false;
        state.isLogoTexture4 = false;
        state.isLogoTexture5 = false;
        state.isLogoTexture6 = false;
        break;
    }
  
    // Update the active filter tab state
    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };
  

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

  const handleEditorTabClick = (tabName) => {
    setActiveEditorTab((prevTab) => (prevTab === tabName ? "" : tabName));
  };

  return (
    <AnimatePresence>
      <axesHelper/>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <AxisCompas />
          </motion.div>
          {/* Editor Tabs */}
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => handleEditorTabClick(tab.name)}
                  />
                ))}

                {/* Render Tab Content */}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          {/* Go Back Button */}
          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => {
                state.intro = true;
                state.selectedDecalId = null;
              }}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          {/* Download Button */}
          <motion.div {...fadeAnimation}>
            <button
              className="share"
              style={{ background: snap.selectedColor }}
              onClick={() => {
                const link = document.createElement("a");
                link.setAttribute("download", "canvas.png");
                link.setAttribute(
                  "href",
                  document
                    .querySelector("canvas")
                    .toDataURL("image/png")
                    .replace("image/png", "image/octet-stream")
                );
                link.click();
              }}
            >
              DOWNLOAD
            </button>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
