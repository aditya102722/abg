function App() {
  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Jal-Drishti</h1>
          <p>AI Urban Flood Nowcasting & Dynamic Emergency Response</p>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          System Online
        </div>
      </header>

      <main className="dashboard">
        <section className="welcome">
          <h2>Pune Flood Decision Dashboard</h2>
          <p>
            Observe → Predict → Simulate → Act
          </p>
        </section>

        <section className="kpi-grid">
          <div className="card">
            <span>🌧️</span>
            <h3>Rainfall</h3>
            <strong>20 mm/h</strong>
            <p>Current intensity</p>
          </div>

          <div className="card">
            <span>🔴</span>
            <h3>High Risk Zones</h3>
            <strong>0</strong>
            <p>Zones requiring attention</p>
          </div>

          <div className="card">
            <span>🚧</span>
            <h3>Unsafe Roads</h3>
            <strong>0</strong>
            <p>Currently blocked</p>
          </div>

          <div className="card">
            <span>🏠</span>
            <h3>Shelters</h3>
            <strong>0</strong>
            <p>Safe shelters available</p>
          </div>
        </section>

        <section className="map-placeholder">
          <h2>🗺️ Flood Risk Map</h2>
          <p>Interactive Pune flood-risk map will be added in Step 2.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
