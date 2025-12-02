const About = () => {
  return (
    <div className="pb-4 max-w-[1200px] mx-auto text-lg leading-relaxed">
      <h1 className="text-3xl font-semibold mb-4">
        How Fish Probability Is Calculated
      </h1>

      <p>
        The fishing probability system estimates how good current conditions are
        for catching fish. Instead of relying on a single variable, it combines
        many sources of information such as weather patterns, geographical
        location, moon phase, and river data. Every factor adds or subtracts
        points from a base probability of 50%.
      </p>

      <h2 className="text-2xl font-semibold mt-6">🌍 Location & Month</h2>
      <p>
        The system adjusts the score based on your country and the current
        month. Spring and summer months generally boost the probability, while
        winter significantly reduces it. Some regions naturally have better
        fishing conditions and receive positive bonuses.
      </p>

      <h2 className="text-2xl font-semibold mt-6">🌡️ Temperature</h2>
      <p>
        Temperature strongly affects fish movement and feeding patterns. Very
        cold or very hot days reduce activity. Moderate temperatures between
        16–22°C provide the best chance of success.
      </p>

      <h2 className="text-2xl font-semibold mt-6">📊 Atmospheric Pressure</h2>
      <p>
        Stable or slightly rising pressure (1005–1020 hPa) is favorable. Low
        pressure usually indicates storms or instability and lowers the
        probability. Very high pressure also slightly reduces activity.
      </p>

      <h2 className="text-2xl font-semibold mt-6">☁️ Cloud Cover</h2>
      <p>
        Fish prefer slightly shaded environments. Partly cloudy conditions offer
        the best score. Extremely clear or heavily overcast skies have a
        negative impact.
      </p>

      <h2 className="text-2xl font-semibold mt-6">
        💨 Wind (Speed, Gusts, Direction)
      </h2>
      <p>
        The algorithm evaluates wind using the Beaufort scale. Light to moderate
        wind improves conditions by oxygenating water and creating surface
        movement. Strong wind or sharp gusts reduce visibility and fish
        activity. Wind direction contributes minor bonuses or penalties
        depending on typical water behavior.
      </p>

      <h2 className="text-2xl font-semibold mt-6">🌧️ Rain & ❄️ Snow</h2>
      <p>
        Light rain increases probability by adding oxygen to the water. Heavy
        rain lowers it due to turbulence and muddy conditions. Snowfall almost
        always reduces the chance of success.
      </p>

      <h2 className="text-2xl font-semibold mt-6">🌕 Moon Phase</h2>
      <p>
        Moon phases influence tides, pressure, and feeding cycles. New Moon and
        Waxing phases provide bonuses, while Full Moon and Waning phases reduce
        overall activity.
      </p>

      <h2 className="text-2xl font-semibold mt-6">
        🌅 Daylight Activity Windows
      </h2>
      <p>
        One of the strongest influences on fish behavior is the time of day. The
        algorithm uses precise <strong>sunrise</strong> and{" "}
        <strong>sunset</strong> times to determine whether the user is currently
        within a high-activity window.
      </p>

      <ul className="list-disc pl-6 mt-3">
        <li>
          <strong>Shortly after sunrise</strong>
          (from sunrise to +2 hours) — fish begin feeding actively, resulting in
          a strong probability boost.
        </li>
        <li>
          <strong>Around sunset</strong>
          (from 1 hour before sunset to +2 hours after) — another natural
          feeding period that increases the score.
        </li>
        <li>
          <strong>Midday period</strong>
          (after sunrise window until 1 hour before sunset) — fish activity
          tends to decrease, resulting in a small penalty.
        </li>
      </ul>

      <p className="mt-3">
        These windows reflect well-known fishing patterns and help the algorithm
        more accurately mimic real fish behavior throughout the day.
      </p>

      <h2 className="text-2xl font-semibold mt-6">
        🏞️ River Conditions (If Available)
      </h2>
      <p>
        If river data is provided, additional hydrological factors are applied:
      </p>

      <ul className="list-disc pl-6 mt-2">
        <li>
          <strong>River water status</strong> — low or medium levels are
          favorable, high levels greatly reduce the probability.
        </li>
        <li>
          <strong>Trend</strong>— falling water levels (<em>malejący</em>)
          improve conditions, rising levels (<em>rosnący</em>) reduce them.
        </li>
        <li>
          <strong>Alert levels</strong>— exceeding warning or alarm levels
          drastically decreases the score.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">🎯 Final Score</h2>
      <p>
        After applying all modifiers, the probability is clamped between 1% and
        99% to avoid unrealistic extremes. The final value aims to provide a
        meaningful, realistic estimation based on combined environmental
        factors.
      </p>

      <p className="mt-6 font-semibold">
        The result is a dynamic, multi-factor probability system that blends
        weather science, fishing experience, and real-time river conditions.
      </p>
    </div>
  );
};

export default About;
