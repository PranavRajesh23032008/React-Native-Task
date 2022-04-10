import { useState } from "react";

function useTournamentName() {
  const [tournamentName, setTournamentName] = useState("");

  return [tournamentName, setTournamentName];
}

export default useTournamentName;
