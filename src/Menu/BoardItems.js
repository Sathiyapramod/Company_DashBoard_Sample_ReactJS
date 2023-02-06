import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";

export function BoardItems() {
  let balance = 50;
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));
  return (
    <div className="d-flex flex-row gap-5 justify-content-center p-4 flex-wrap">
      {[
        { name: "Earnings (monthly)", value: "$40,000" },
        { name: "Earnings(Annualy)", value: "$215,000" },
      ].map((element, index) => {
        return (
          <div
            key={index}
            className="banner rounded-3 col-3 col-sm-2 col-md-6 col-lg-2 p-2 pe-4 bg-white border-4 border-start border-primary shadow d-flex flex-row"
          >
            <div className="d-flex flex-column pt-2 ps-3 text-start text-primary col-10 fs-5">
              {element.name}
              <span className="text-start fs-2 text-dark">{element.value}</span>
            </div>
            <div className="col-2 text-body-tertiary mt-4">
              {index % 2 == 0 ? (
                <CardGiftcardRoundedIcon
                  fontSize="large"
                  sx={{ fontSize: 45 }}
                />
              ) : (
                <AttachMoneyRoundedIcon
                  fontSize="large"
                  sx={{ fontSize: 45 }}
                />
              )}
            </div>
          </div>
        );
      })}
      <div id="progress-status">
        <div className="banner rounded-3 col-3 col-sm-2 col-md-6 col-lg-2 p-2 pe-4 bg-white border-4 border-start border-primary shadow d-flex flex-row">
          <div className="d-flex flex-column pt-2 ps-3 text-start text-primary col-10 fs-5">
            Tasks
            <span className="text-start fs-2 text-dark flex-column d-flex">
              <span>{balance}%</span>
              <span>
                <BorderLinearProgress variant="determinate" value={balance} />
              </span>
            </span>
          </div>
          <div className="col-2 text-body-tertiary mt-4">
            <AssignmentRoundedIcon sx={{ fontSize: 45 }} />
          </div>
        </div>
      </div>
      <div id="pending-requests">
        <div className="banner rounded-3 col-3 col-sm-2 col-lg-2 col-md-6 p-2 pe-4 bg-white border-4 border-start border-primary shadow d-flex flex-row">
          <div className="d-flex flex-column pt-2 ps-3 text-start text-primary col-9 fs-5">
            Pending Requests
            <span className="text-start fs-2 text-dark flex-column d-flex">
              <span>18</span>
            </span>
          </div>
          <div className="mt-4 text-body-tertiary">
            <ForumRoundedIcon sx={{ fontSize: 45 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
