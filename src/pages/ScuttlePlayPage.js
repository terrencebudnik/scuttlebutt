import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import "./ScuttlePlayPage.css";

function ScuttlePlayPage() {
  let { id } = useParams();
  const [scuttle, setScuttle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const scuttleRef = ref(db, `scuttles/${id}`);
    const unsubscribe = onValue(scuttleRef, (snapshot) => {
      setScuttle(snapshot.val());
      setLoading(false);
    });

    return () => unsubscribe();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="scuttle-play-page">
        <div className="scuttle-play-container">
            
      <h1 className="scuttle-play-title">Continue the Scuttlebutt</h1>

      {scuttle && (
          <>
          <p>Message: {scuttle.message}</p>
        </>
      )}
      </div>
    </div>
  );
}

export default ScuttlePlayPage;
