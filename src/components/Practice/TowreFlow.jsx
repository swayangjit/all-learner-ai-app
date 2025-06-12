import React, { useState, useEffect, useRef } from "react";
import next from "../../assets/next.svg";
import EffectImg from "../../assets/effect.svg";
import boyImg from "../../assets/boyImg.svg";
import pandaImg from "../../assets/paandaImg.svg";
import starsandcloudsImg from "../../assets/starsandclouds.png";
import cross from "../../assets/cross.svg";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  createTheme,
} from "@mui/material";
import { doubleMetaphone } from "double-metaphone";
import { pipeline, env } from "@xenova/transformers";
import { setLocalData } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import MainLayout from "../Layouts.jsx/MainLayout";

env.localModelPath = "https://huggingface.co/Xenova/whisper-tiny/resolve/main/";

const allWords = [
  { title: "is", isCorrect: false },
  { title: "up", isCorrect: false },
  { title: "cat", isCorrect: true },
  { title: "red", isCorrect: false },
  { title: "me", isCorrect: false },
  { title: "to", isCorrect: false },
  { title: "no", isCorrect: false },
  { title: "we", isCorrect: true },
  { title: "he", isCorrect: false },
  { title: "the", isCorrect: false },
  { title: "and", isCorrect: false },
  { title: "yes", isCorrect: false },
  { title: "of", isCorrect: true },
  { title: "him", isCorrect: false },
  { title: "as", isCorrect: false },
  { title: "book", isCorrect: false },
  { title: "was", isCorrect: false },
  { title: "help", isCorrect: false },
  { title: "then", isCorrect: false },
  { title: "time", isCorrect: false },
  { title: "wood", isCorrect: false },
  { title: "let", isCorrect: false },
  { title: "men", isCorrect: true },
  { title: "baby", isCorrect: false },
  { title: "new", isCorrect: false },
  { title: "stop", isCorrect: false },
  { title: "work", isCorrect: false },
  { title: "jump", isCorrect: false },
  { title: "part", isCorrect: true },
  { title: "fast", isCorrect: false },
  { title: "fine", isCorrect: false },
  { title: "milk", isCorrect: false },
  { title: "back", isCorrect: false },
  { title: "lost", isCorrect: false },
  { title: "find", isCorrect: false },
  { title: "paper", isCorrect: true },
  { title: "open", isCorrect: false },
  { title: "kind", isCorrect: false },
  { title: "able", isCorrect: false },
  { title: "shoes", isCorrect: false },
  { title: "money", isCorrect: false },
  { title: "great", isCorrect: false },
  { title: "father", isCorrect: true },
  { title: "river", isCorrect: false },
  { title: "space", isCorrect: false },
  { title: "short", isCorrect: false },
  { title: "left", isCorrect: false },
  { title: "people", isCorrect: false },
  { title: "almost", isCorrect: false },
  { title: "waves", isCorrect: false },
  { title: "child", isCorrect: false },
  { title: "strong", isCorrect: false },
  { title: "crowd", isCorrect: true },
  { title: "better", isCorrect: false },
  { title: "inside", isCorrect: false },
  { title: "plane", isCorrect: false },
  { title: "pretty", isCorrect: false },
  { title: "famous", isCorrect: false },
  { title: "children", isCorrect: false },
  { title: "without", isCorrect: true },
  { title: "finally", isCorrect: false },
  { title: "strange", isCorrect: false },
  { title: "budget", isCorrect: false },
  { title: "repress", isCorrect: false },
  { title: "contain", isCorrect: false },
  { title: "justice", isCorrect: false },
  { title: "morning", isCorrect: false },
  { title: "resolve", isCorrect: false },
  { title: "describe", isCorrect: false },
  { title: "garment", isCorrect: true },
  { title: "business", isCorrect: false },
  { title: "qualify", isCorrect: false },
  { title: "potent", isCorrect: false },
  { title: "collapse", isCorrect: false },
  { title: "elements", isCorrect: false },
  { title: "pioneer", isCorrect: false },
  { title: "remember", isCorrect: false },
  { title: "dangerous", isCorrect: false },
  { title: "uniform", isCorrect: false },
  { title: "necessary", isCorrect: false },
  { title: "problems", isCorrect: false },
  { title: "absentee", isCorrect: false },
  { title: "advertise", isCorrect: true },
  { title: "pleasant", isCorrect: false },
  { title: "property", isCorrect: false },
  { title: "distress", isCorrect: false },
  { title: "information", isCorrect: true },
  { title: "recession", isCorrect: false },
  { title: "understand", isCorrect: false },
  { title: "emphasis", isCorrect: false },
  { title: "confident", isCorrect: false },
  { title: "intuition", isCorrect: false },
  { title: "boisterous", isCorrect: true },
  { title: "plausible", isCorrect: false },
  { title: "courageous", isCorrect: false },
  { title: "alienate", isCorrect: false },
  { title: "extinguish", isCorrect: false },
  { title: "prairie", isCorrect: false },
  { title: "limousine", isCorrect: false },
  { title: "valentine", isCorrect: false },
  { title: "detective", isCorrect: true },
  { title: "recently", isCorrect: false },
  { title: "instruction", isCorrect: false },
  { title: "transient", isCorrect: false },
  { title: "phenomenon", isCorrect: false },
  { title: "calculated", isCorrect: false },
  { title: "alternative", isCorrect: true },
  { title: "collective", isCorrect: false },
];

const wordsData = allWords?.map((word, idx) => ({
  id: idx + 1,
  word,
}));

const theme = createTheme();

const TowreFlow = ({
  setVoiceText,
  setRecordedAudio,
  setVoiceAnimate,
  storyLine,
  type,
  //handleNext,
  background,
  parentWords = "",
  enableNext,
  showTimer,
  points,
  steps,
  currentStep,
  contentId,
  contentType,
  level,
  isDiscover,
  progressData,
  showProgress,
  playTeacherAudio = () => {},
  callUpdateLearner,
  disableScreen,
  isShowCase,
  handleBack,
  setEnableNext,
  //loading,
  setOpenMessageDialog,
  audio,
  currentImg,
  fluency,
  startShowCase,
  setStartShowCase,
  livesData,
  setLivesData,
  gameOverData,
  highlightWords,
  matchedChar,
  isNextButtonCalled,
  setIsNextButtonCalled,
}) => {
  const [page, setPage] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [started, setStarted] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [wordTimer, setWordTimer] = useState(null);
  const [showWordsList, setShowWordsList] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [recordedAudioBlob, setRecordedAudioBlob] = useState(null);
  const wordsPerPage = 40;
  const totalPages = Math.ceil(wordsData.length / wordsPerPage);
  const currentWords = wordsData.slice(
    page * wordsPerPage,
    (page + 1) * wordsPerPage
  );
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const correctCount = allWords.filter((word) => word.isCorrect).length;
  const incorrectCount = allWords.length - correctCount;

  console.log("allWords", allWords);

  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[.,!?]/g, "")
      .split(/\s+/);

  const getPhonetic = (word) => doubleMetaphone(word)[0];

  const startAudioRecording = async () => {
    try {
      chunksRef.current = [];

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        console.log("⛔ Recording stopped.");
        if (chunksRef.current.length === 0) {
          console.warn("❗ No data to create blob.");
          return;
        }

        const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
        setRecordedAudioBlob(audioBlob);
        chunksRef.current = [];

        streamRef.current?.getTracks().forEach((track) => track.stop());

        // Transcribe audio after recording stops
        try {
          setLoading(true);
          const transcriber = await pipeline(
            "automatic-speech-recognition",
            ""
          );
          console.log("🧠 Pipeline loaded.");

          const audioUrl = URL.createObjectURL(audioBlob); // Use blob URL
          console.log("🎧 Transcribing audio:", audioUrl);

          const output = await transcriber(audioUrl, {
            chunk_length_s: 20,
            stride_length_s: 5,
          });

          console.log("📝 Transcription result:", output.text);

          // Update transcript and mark as completed
          const transcript = output.text;
          const transcriptWords = normalize(transcript);
          const transcriptPhonetics = new Set(transcriptWords.map(getPhonetic));

          allWords.forEach((word) => {
            const lower = word?.title?.toLowerCase();
            const isSpoken =
              transcriptWords.includes(lower) ||
              transcriptPhonetics.has(getPhonetic(lower));

            word.isCorrect = isSpoken;
          });
          console.log("allWordsNew", allWords);
          setLoading(false);
          setCompleted(true);
        } catch (error) {
          console.error("❌ Error during transcription:", error);
          setLoading(false);
          setCompleted(true);
        }
      };

      mediaRecorder.start();
    } catch (error) {
      console.error("🚨 Error starting audio recording:", error);
    }
  };

  const stopAudioRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
    } else {
      console.warn("❗ Recorder already inactive or null.");
    }
  };

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    } else {
      stopAudioRecording();
      setLoading(true);
      //setCompleted(true);
    }
  };

  useEffect(() => {
    let interval = null;
    if (started && !completed && wordTimer !== null) {
      interval = setInterval(() => {
        setWordTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            stopAudioRecording();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [started, wordTimer, completed]);

  const rows = [];
  for (let i = 0; i < 8; i++) {
    const cells = [];
    for (let j = 0; j < 5; j++) {
      const index = i + j * 8;
      const wordData = currentWords[index];
      cells.push(
        <td
          key={j}
          style={{
            padding: isMobile ? "4px 8px" : "8px 16px",
            fontSize: isMobile ? "10px" : "17px",
            border: "1px solid #eee",
            width: isMobile ? "80px" : "150px",
            height: "26px",
            textAlign: "center",
          }}
        >
          {wordData ? `${wordData.id}. ${wordData.word.title}` : ""}
        </td>
      );
    }
    rows.push(<tr key={i}>{cells}</tr>);
  }

  const percentRemaining = (wordTimer / wordsPerPage) * 100;
  const timerColor = "#FFFFFF";
  const bgColor = "#E0F7FA";

  const startCountdown = () => {
    let timeLeft = 3;
    setCountdown(timeLeft);
    startAudioRecording();
    const interval = setInterval(() => {
      timeLeft -= 1;
      if (timeLeft === 0) {
        clearInterval(interval);
        setStarted(true);
        setWordTimer(wordsPerPage);
      }
      setCountdown(timeLeft);
    }, 1000);
  };

  const ResultsPage = ({ onNextClick }) => (
    <Box
      sx={{
        backgroundColor: "#d8f0fc",
        width: "100%",
        height: isMobile ? "100vh" : "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          backgroundImage: `url(${starsandcloudsImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "1100px",
          padding: "40px",
          position: "relative",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          height: "450px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#FF7F36",
            mb: 4,
            fontFamily: "Quicksand",
            fontWeight: "700",
          }}
        >
          Nice Try!
        </Typography>

        <Box
          sx={{
            border: "1px solid #1CB0F6",
            borderRadius: "15px",
            p: 3,
            mb: 3,
            width: 330,
            backgroundColor: "#f9fcff",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#6CC227",
                fontSize: "18px",
                pb: 0.5,
                fontFamily: "Quicksand",
                fontWeight: "700",
              }}
            >
              <span>Correct Words:</span>
              <span style={{ fontWeight: "bold" }}>{correctCount}</span>
            </Box>
            <Box
              sx={{
                width: "calc(100% + 40px)",
                ml: -5,
                borderBottom: "1px solid #1CB0F64D",
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#FF7F36",
                fontSize: "18px",
                pb: 0.5,
                fontFamily: "Quicksand",
                fontWeight: "700",
              }}
            >
              <span>Incorrect Words:</span>
              <span style={{ fontWeight: "bold" }}>{incorrectCount}</span>
            </Box>
            <Box
              sx={{
                width: "calc(100% + 40px)",
                ml: -5,
                borderBottom: "1px solid #1CB0F64D",
              }}
            />
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#333F61",
                fontSize: "17px",
                pb: 0.5,
                fontFamily: "Quicksand",
                fontWeight: "700",
              }}
            >
              <span>Score:</span>
              <span style={{ fontWeight: "bold", fontFamily: "Quicksand" }}>
                {correctCount}/{allWords.length}
              </span>
            </Box>
          </Box>
        </Box>

        <Box>
          <img
            src={pandaImg}
            alt="panda"
            style={{ width: "170px", height: "170px", marginBottom: "20px" }}
          />
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Button
            sx={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              setLocalData("tFlow", false);

              //window.location.reload();
              if (process.env.REACT_APP_IS_APP_IFRAME === "true") {
                navigate("/");
              } else {
                navigate("/discover-start");
              }
            }}
          >
            <img
              src={next}
              alt="next"
              style={{ width: "40px", marginTop: "-10px" }}
            />
          </Button>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "-4px",
            right: "-30px",
            width: "230px",
            height: "auto",
            cursor: "pointer",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <img
              src={boyImg}
              alt="monkey"
              style={{ width: "200px" }}
              onClick={onNextClick}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const WordsListPage = ({ onBackClick }) => {
    const columns = 4;
    const rows = Math.ceil(wordsData.length / columns);

    return (
      <Box
        sx={{
          backgroundColor: "#C6EDFF",
          minHeight: isMobile ? "100vh" : "89vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: isMobile ? 1 : 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: 4,
            p: 4,
            width: isMobile ? "95%" : "1200px",
            boxShadow: 3,
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={cross}
            alt="Close"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 24,
              height: 24,
              cursor: "pointer",
            }}
            onClick={onBackClick}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
              gap: 5,
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <Typography fontSize={20} fontWeight={600}>
              ✅ Correct Words:{" "}
              <span style={{ color: "#2DB200" }}>{correctCount}</span>
            </Typography>
            <Typography fontSize={20} fontWeight={600}>
              ❌ Incorrect Words:{" "}
              <span style={{ color: "#FF6D4D" }}>{incorrectCount}</span>
            </Typography>
          </Box>

          <Box
            component="table"
            sx={{ width: "100%", borderCollapse: "collapse" }}
          >
            <tbody>
              {Array.from({ length: rows }).map((_, rowIdx) => (
                <tr key={rowIdx}>
                  {Array.from({ length: columns }).map((_, colIdx) => {
                    const index = rowIdx * columns + colIdx;
                    const item = wordsData[index];
                    return (
                      <td
                        key={colIdx}
                        style={{
                          padding: "8px 12px",
                          border: "1px solid #EEE",
                          color: item?.word.isCorrect ? "#2DB200" : "#FF6D4D",
                          fontWeight: 500,
                          fontSize: "16px",
                          width: `${100 / columns}%`,
                        }}
                      >
                        {item ? `${item.id}. ${item.word.title}` : ""}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </Box>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={onBackClick}
            >
              <img src={next} alt="next" style={{ width: "40px" }} />
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };

  if (showWordsList) {
    return <WordsListPage onBackClick={() => setShowWordsList(false)} />;
  }

  if (completed) {
    return <ResultsPage onNextClick={() => setShowWordsList(true)} />;
  }

  return (
    <MainLayout
      background={background}
      handleNext={handleNext}
      enableNext={enableNext}
      showTimer={showTimer}
      points={points}
      pageName={"m8"}
      //answer={answer}
      //isRecordingComplete={isRecordingComplete}
      parentWords={parentWords}
      fluency={false}
      //={recAudio}
      {...{
        steps,
        currentStep,
        level,
        progressData,
        showProgress,
        playTeacherAudio,
        handleBack,
        disableScreen,
        loading,
        //fluency = false,
        isShowCase,
        startShowCase,
        setStartShowCase,
        livesData,
        gameOverData,
        setIsNextButtonCalled,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#C6EDFF",
          //height: isMobile ? "100vh" : "89vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: isMobile ? 1 : 4,
        }}
      >
        {!started && countdown === 4 ? (
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 4,
              p: 4,
              width: isMobile ? "90%" : 500,
              height: 200,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 3,
            }}
          >
            <Typography
              variant={isMobile ? "h6" : "h4"}
              fontWeight="bold"
              gutterBottom
            >
              Ready to Begin?
            </Typography>
            <Button
              onClick={startCountdown}
              variant="contained"
              color="success"
              size={isMobile ? "small" : "large"}
              sx={{ fontWeight: "bold", borderRadius: 2, marginTop: 2 }}
            >
              Start
            </Button>
          </Box>
        ) : !started && countdown > 0 ? (
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 4,
              p: 4,
              width: isMobile ? "90%" : 500,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? "48px" : "64px",
              fontWeight: "bold",
              color: "#4CAF50",
              boxShadow: 3,
            }}
          >
            {countdown}
          </Box>
        ) : !loading ? (
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 4,
              p: isMobile ? 2 : 5,
              width: isMobile ? "95%" : "1100px",
              height: isMobile ? "auto" : "450px",
              boxShadow: 3,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: isMobile ? "12px" : "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: isMobile ? 55 : 70,
                height: isMobile ? 55 : 70,
                borderRadius: "50%",
                background: `conic-gradient(${timerColor} ${percentRemaining}%, ${bgColor} 0%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? 14 : 24,
                fontWeight: "bold",
                color: "black",
                transition: "background 1s linear",
                border: "4px solid #0780B9",
              }}
            >
              {wordTimer}
            </Box>

            <img
              src={EffectImg}
              alt="effect"
              style={{
                position: "absolute",
                top: isMobile ? "15px" : "25px",
                right: isMobile ? "8px" : "30px",
                height: isMobile ? "22px" : "40px",
              }}
            />

            <Box sx={{ overflowX: isMobile ? "auto" : "visible", mt: 8 }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontFamily: "Quicksand",
                  fontWeight: isMobile ? 300 : 500,
                  fontSize: isMobile ? "14px" : "27px",
                }}
              >
                <tbody>{rows}</tbody>
              </table>
            </Box>

            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Button onClick={handleNext} sx={{ border: "none", p: 0 }}>
                <img
                  src={next}
                  alt="next"
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 4,
              p: 4,
              width: isMobile ? "90%" : 500,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? "48px" : "64px",
              fontWeight: "bold",
              color: "#4CAF50",
              boxShadow: 3,
            }}
          >
            {"...."}
          </Box>
        )}
      </Box>
    </MainLayout>
  );
};

export default TowreFlow;
