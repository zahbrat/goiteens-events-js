import PageBoard from "./PageBoard.js";
import Title from "./Title.js";
import Event from "./Event.js";
import { SlCalender, SlLocationPin, SlUser, SlClock } from "react-icons/sl";
import events from "../upcoming-events.json";

const App = () => {
  return (
    <>
      <Title>24th Core Worlds Coalition Conference</Title>
      <PageBoard>
        {events.map((el) => {
          const startDate = new Date(el.time.start);
          const endDate = new Date(el.time.end);

          const differenceInMilliseconds = endDate - startDate;
          const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

          const roundedHours = Math.round(differenceInHours);

          const dateOptions = {
            month: "long",
            day: "2-digit",
            year: "numeric",
          };

          const timeOptions = {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          };

          const formattedDatePart = startDate.toLocaleDateString(
            "en-US",
            dateOptions
          );
          const formattedTimePart = startDate.toLocaleTimeString(
            "en-US",
            timeOptions
          );

          return (
            <Event>
              <h3 style={{ marginBottom: "0.7rem" }}>{el.name}</h3>
              <div
                class="stats"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.1rem",
                }}
              >
                <p>
                  <SlLocationPin />
                  <span>{el.location}</span>
                </p>
                <p>
                  <SlUser />
                  <span>{el.speaker}</span>
                </p>
                <p>
                  <SlCalender />
                  <span>{`${formattedDatePart.replace(
                    ",",
                    ""
                  )}, ${formattedTimePart}`}</span>
                </p>
                <p>
                  <SlClock />
                  <span>{roundedHours} hours</span>
                </p>
              </div>
            </Event>
          );
        })}
      </PageBoard>
    </>
  );
};

export default App;
