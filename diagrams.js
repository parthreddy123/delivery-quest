const chapterDiagrams = {
1: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <!-- Title -->
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text)">The Four Team Types</text>
  <!-- Stream-Aligned -->
  <rect x="20" y="38" width="220" height="90" rx="8" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.1"/>
  <text x="130" y="62" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">Stream-Aligned</text>
  <text x="130" y="78" text-anchor="middle" font-size="9" fill="var(--dim)">Primary team type.</text>
  <text x="130" y="92" text-anchor="middle" font-size="9" fill="var(--dim)">Aligned to a single flow</text>
  <text x="130" y="106" text-anchor="middle" font-size="9" fill="var(--dim)">of work (product, service, feature).</text>
  <!-- Enabling -->
  <rect x="260" y="38" width="220" height="90" rx="8" stroke="var(--cyan)" stroke-width="2" fill="var(--cyan)" fill-opacity="0.1"/>
  <text x="370" y="62" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--cyan)">Enabling</text>
  <text x="370" y="78" text-anchor="middle" font-size="9" fill="var(--dim)">Helps stream-aligned teams</text>
  <text x="370" y="92" text-anchor="middle" font-size="9" fill="var(--dim)">acquire missing capabilities.</text>
  <text x="370" y="106" text-anchor="middle" font-size="9" fill="var(--dim)">Coaches, does not own delivery.</text>
  <!-- Complicated-Subsystem -->
  <rect x="20" y="142" width="220" height="90" rx="8" stroke="var(--gold)" stroke-width="2" fill="var(--gold)" fill-opacity="0.1"/>
  <text x="130" y="166" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--gold)">Complicated-Subsystem</text>
  <text x="130" y="182" text-anchor="middle" font-size="9" fill="var(--dim)">Owns a subsystem requiring</text>
  <text x="130" y="196" text-anchor="middle" font-size="9" fill="var(--dim)">deep specialist knowledge</text>
  <text x="130" y="210" text-anchor="middle" font-size="9" fill="var(--dim)">(e.g., ML engine, codec, math lib).</text>
  <!-- Platform -->
  <rect x="260" y="142" width="220" height="90" rx="8" stroke="var(--green)" stroke-width="2" fill="var(--green)" fill-opacity="0.1"/>
  <text x="370" y="166" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--green)">Platform</text>
  <text x="370" y="182" text-anchor="middle" font-size="9" fill="var(--dim)">Provides internal services</text>
  <text x="370" y="196" text-anchor="middle" font-size="9" fill="var(--dim)">to reduce cognitive load of</text>
  <text x="370" y="210" text-anchor="middle" font-size="9" fill="var(--dim)">stream-aligned teams.</text>
  <!-- Divider lines -->
  <line x1="250" y1="38" x2="250" y2="232" stroke="var(--border)" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="20" y1="138" x2="480" y2="138" stroke="var(--border)" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="250" y="252" text-anchor="middle" font-size="9" fill="var(--dim)">Most teams should be stream-aligned; others exist to support them.</text>
</svg>`,

2: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text)">Team Interaction Modes</text>
  <!-- Collaboration -->
  <text x="83" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--accent)">Collaboration</text>
  <circle cx="60" cy="100" r="35" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.08"/>
  <circle cx="106" cy="100" r="35" stroke="var(--cyan)" stroke-width="2" fill="var(--cyan)" fill-opacity="0.08"/>
  <text x="60" y="104" text-anchor="middle" font-size="9" fill="var(--accent)">Team</text>
  <text x="60" y="114" text-anchor="middle" font-size="9" fill="var(--accent)">A</text>
  <text x="106" y="104" text-anchor="middle" font-size="9" fill="var(--cyan)">Team</text>
  <text x="106" y="114" text-anchor="middle" font-size="9" fill="var(--cyan)">B</text>
  <text x="83" y="152" text-anchor="middle" font-size="9" fill="var(--dim)">Two teams work closely</text>
  <text x="83" y="164" text-anchor="middle" font-size="9" fill="var(--dim)">together on a shared goal.</text>
  <text x="83" y="176" text-anchor="middle" font-size="9" fill="var(--dim)">High bandwidth, temporary.</text>
  <!-- X-as-a-Service -->
  <text x="250" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--green)">X-as-a-Service</text>
  <rect x="195" y="70" width="50" height="36" rx="6" stroke="var(--green)" stroke-width="2" fill="var(--green)" fill-opacity="0.1"/>
  <text x="220" y="92" text-anchor="middle" font-size="9" fill="var(--green)">Provider</text>
  <rect x="285" y="70" width="50" height="36" rx="6" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.1"/>
  <text x="310" y="92" text-anchor="middle" font-size="9" fill="var(--accent)">Consumer</text>
  <line x1="247" y1="88" x2="282" y2="88" stroke="var(--green)" stroke-width="2"/>
  <polygon points="280,83 290,88 280,93" fill="var(--green)"/>
  <rect x="195" y="112" width="140" height="20" rx="4" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)"/>
  <text x="265" y="126" text-anchor="middle" font-size="9" fill="var(--dim)">API / Service Contract</text>
  <text x="250" y="152" text-anchor="middle" font-size="9" fill="var(--dim)">One team provides a service;</text>
  <text x="250" y="164" text-anchor="middle" font-size="9" fill="var(--dim)">the other consumes it via API.</text>
  <text x="250" y="176" text-anchor="middle" font-size="9" fill="var(--dim)">Clear ownership boundary.</text>
  <!-- Facilitating -->
  <text x="417" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--cyan)">Facilitating</text>
  <rect x="392" y="68" width="50" height="30" rx="6" stroke="var(--cyan)" stroke-width="2" fill="var(--cyan)" fill-opacity="0.1"/>
  <text x="417" y="87" text-anchor="middle" font-size="9" fill="var(--cyan)">Enabler</text>
  <rect x="392" y="112" width="50" height="30" rx="6" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.1"/>
  <text x="417" y="131" text-anchor="middle" font-size="9" fill="var(--accent)">Team</text>
  <line x1="417" y1="100" x2="417" y2="110" stroke="var(--cyan)" stroke-width="2" stroke-dasharray="4,3"/>
  <polygon points="412,108 417,115 422,108" fill="var(--cyan)"/>
  <text x="417" y="152" text-anchor="middle" font-size="9" fill="var(--dim)">Enabling team coaches and</text>
  <text x="417" y="164" text-anchor="middle" font-size="9" fill="var(--dim)">upskills the stream team.</text>
  <text x="417" y="176" text-anchor="middle" font-size="9" fill="var(--dim)">Sensing + gap-filling.</text>
  <!-- Separators -->
  <line x1="166" y1="42" x2="166" y2="180" stroke="var(--border)" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="334" y1="42" x2="334" y2="180" stroke="var(--border)" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- Key guidance -->
  <rect x="30" y="198" width="440" height="55" rx="6" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)"/>
  <text x="250" y="216" text-anchor="middle" font-size="9" fill="var(--dim)">Collaboration = discovery phase (time-boxed), X-as-a-Service = steady state,</text>
  <text x="250" y="230" text-anchor="middle" font-size="9" fill="var(--dim)">Facilitating = capability gap. Teams should evolve from Collaboration to XaaS over time.</text>
  <text x="250" y="244" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--gold)">Goal: minimize collaboration to reduce coupling.</text>
</svg>`,

3: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text)">Cognitive Load &amp; Team Size</text>
  <!-- Cognitive Load Stacked Bars -->
  <text x="130" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--text)">Cognitive Load Types</text>
  <!-- Bar: Overloaded Team -->
  <text x="70" y="72" text-anchor="middle" font-size="9" fill="var(--dim)">Overloaded</text>
  <rect x="20" y="78" width="100" height="24" rx="3" fill="var(--red)" fill-opacity="0.25" stroke="var(--red)" stroke-width="1"/>
  <text x="70" y="94" text-anchor="middle" font-size="8" fill="var(--red)">Intrinsic (domain)</text>
  <rect x="20" y="104" width="100" height="30" rx="3" fill="var(--gold)" fill-opacity="0.25" stroke="var(--gold)" stroke-width="1"/>
  <text x="70" y="123" text-anchor="middle" font-size="8" fill="var(--gold)">Extraneous (env noise)</text>
  <rect x="20" y="136" width="100" height="14" rx="3" fill="var(--green)" fill-opacity="0.25" stroke="var(--green)" stroke-width="1"/>
  <text x="70" y="147" text-anchor="middle" font-size="8" fill="var(--green)">Germane</text>
  <!-- Capacity line -->
  <line x1="15" y1="130" x2="125" y2="130" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="132" y="134" font-size="7" fill="var(--red)">capacity</text>
  <!-- Bar: Balanced Team -->
  <text x="215" y="72" text-anchor="middle" font-size="9" fill="var(--dim)">Balanced</text>
  <rect x="165" y="78" width="100" height="20" rx="3" fill="var(--accent)" fill-opacity="0.2" stroke="var(--accent)" stroke-width="1"/>
  <text x="215" y="92" text-anchor="middle" font-size="8" fill="var(--accent)">Intrinsic (domain)</text>
  <rect x="165" y="100" width="100" height="12" rx="3" fill="var(--gold)" fill-opacity="0.2" stroke="var(--gold)" stroke-width="1"/>
  <text x="215" y="110" text-anchor="middle" font-size="8" fill="var(--gold)">Extraneous</text>
  <rect x="165" y="114" width="100" height="24" rx="3" fill="var(--green)" fill-opacity="0.3" stroke="var(--green)" stroke-width="1"/>
  <text x="215" y="130" text-anchor="middle" font-size="8" fill="var(--green)">Germane (learning)</text>
  <line x1="160" y1="142" x2="270" y2="142" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="277" y="146" font-size="7" fill="var(--green)">capacity</text>
  <!-- Legend -->
  <text x="130" y="172" text-anchor="middle" font-size="8" fill="var(--dim)">Intrinsic = task complexity | Extraneous = env friction | Germane = learning</text>
  <text x="130" y="184" text-anchor="middle" font-size="8" fill="var(--gold)">Minimize extraneous; maximize germane.</text>
  <!-- Dunbar's Numbers -->
  <line x1="305" y1="42" x2="305" y2="188" stroke="var(--border)" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="400" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--text)">Dunbar's Numbers</text>
  <!-- 5 -->
  <circle cx="330" cy="80" r="14" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.12"/>
  <text x="330" y="84" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">5</text>
  <text x="370" y="78" font-size="9" fill="var(--dim)">Close collaborators</text>
  <text x="370" y="90" font-size="8" fill="var(--dim)">(tight trust, daily sync)</text>
  <!-- 15 -->
  <circle cx="330" cy="118" r="14" stroke="var(--cyan)" stroke-width="2" fill="var(--cyan)" fill-opacity="0.12"/>
  <text x="330" y="122" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--cyan)">15</text>
  <text x="370" y="116" font-size="9" fill="var(--dim)">Trust boundary</text>
  <text x="370" y="128" font-size="8" fill="var(--dim)">(max team with deep trust)</text>
  <!-- 50 -->
  <circle cx="330" cy="156" r="14" stroke="var(--gold)" stroke-width="2" fill="var(--gold)" fill-opacity="0.12"/>
  <text x="330" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--gold)">50</text>
  <text x="370" y="154" font-size="9" fill="var(--dim)">Mutual recognition</text>
  <text x="370" y="166" font-size="8" fill="var(--dim)">(tribe / department)</text>
  <!-- 150 -->
  <circle cx="330" cy="194" r="14" stroke="var(--green)" stroke-width="2" fill="var(--green)" fill-opacity="0.12"/>
  <text x="330" y="198" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--green)">150</text>
  <text x="370" y="192" font-size="9" fill="var(--dim)">Social group limit</text>
  <text x="370" y="204" font-size="8" fill="var(--dim)">(max meaningful connections)</text>
  <!-- Bottom note -->
  <rect x="30" y="220" width="440" height="44" rx="6" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)"/>
  <text x="250" y="238" text-anchor="middle" font-size="9" fill="var(--dim)">Team Topologies recommends 5-9 people per team. Keep domain scope</text>
  <text x="250" y="252" text-anchor="middle" font-size="9" fill="var(--dim)">small enough that the team can hold it in their heads.</text>
</svg>`,

4: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text)">Platform Thinking</text>
  <!-- Stream-Aligned Teams (top layer) -->
  <rect x="30" y="40" width="100" height="34" rx="6" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.12"/>
  <text x="80" y="61" text-anchor="middle" font-size="9" fill="var(--accent)">Stream Team A</text>
  <rect x="150" y="40" width="100" height="34" rx="6" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.12"/>
  <text x="200" y="61" text-anchor="middle" font-size="9" fill="var(--accent)">Stream Team B</text>
  <rect x="270" y="40" width="100" height="34" rx="6" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.12"/>
  <text x="320" y="61" text-anchor="middle" font-size="9" fill="var(--accent)">Stream Team C</text>
  <rect x="390" y="40" width="80" height="34" rx="6" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.08"/>
  <text x="430" y="57" text-anchor="middle" font-size="8" fill="var(--dim)">...more</text>
  <!-- Golden Path arrow -->
  <text x="488" y="72" text-anchor="end" font-size="8" font-weight="bold" fill="var(--gold)">Golden</text>
  <text x="488" y="82" text-anchor="end" font-size="8" font-weight="bold" fill="var(--gold)">Path</text>
  <line x1="478" y1="56" x2="478" y2="220" stroke="var(--gold)" stroke-width="2" stroke-dasharray="6,3"/>
  <polygon points="474,218 478,228 482,218" fill="var(--gold)"/>
  <!-- Down arrows -->
  <line x1="80" y1="76" x2="80" y2="94" stroke="var(--border)" stroke-width="1"/>
  <line x1="200" y1="76" x2="200" y2="94" stroke="var(--border)" stroke-width="1"/>
  <line x1="320" y1="76" x2="320" y2="94" stroke="var(--border)" stroke-width="1"/>
  <!-- Thin API Layer -->
  <rect x="30" y="96" width="440" height="28" rx="6" stroke="var(--cyan)" stroke-width="2" fill="var(--cyan)" fill-opacity="0.08"/>
  <text x="250" y="114" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--cyan)">Thin API Layer  (self-service, well-documented)</text>
  <!-- Down arrows -->
  <line x1="130" y1="126" x2="130" y2="140" stroke="var(--border)" stroke-width="1"/>
  <line x1="250" y1="126" x2="250" y2="140" stroke="var(--border)" stroke-width="1"/>
  <line x1="370" y1="126" x2="370" y2="140" stroke="var(--border)" stroke-width="1"/>
  <!-- Platform Services -->
  <rect x="30" y="142" width="440" height="46" rx="6" stroke="var(--green)" stroke-width="2" fill="var(--green)" fill-opacity="0.08"/>
  <text x="250" y="160" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--green)">Platform Team Services</text>
  <text x="100" y="178" text-anchor="middle" font-size="8" fill="var(--dim)">CI/CD Pipelines</text>
  <text x="220" y="178" text-anchor="middle" font-size="8" fill="var(--dim)">Observability</text>
  <text x="340" y="178" text-anchor="middle" font-size="8" fill="var(--dim)">Auth / Secrets</text>
  <text x="435" y="178" text-anchor="middle" font-size="8" fill="var(--dim)">DBaaS</text>
  <!-- Down arrows -->
  <line x1="250" y1="190" x2="250" y2="204" stroke="var(--border)" stroke-width="1"/>
  <!-- Infrastructure -->
  <rect x="30" y="206" width="440" height="30" rx="6" stroke="var(--dim)" stroke-width="1.5" fill="var(--code-bg)"/>
  <text x="250" y="225" text-anchor="middle" font-size="10" fill="var(--dim)">Infrastructure  (cloud, networking, compute, storage)</text>
  <!-- Bottom note -->
  <text x="250" y="258" text-anchor="middle" font-size="9" fill="var(--dim)">A good platform is a product — it should make the right thing the easy thing.</text>
</svg>`,

5: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text)">The Four DORA Metrics</text>
  <!-- Headers -->
  <text x="250" y="42" text-anchor="middle" font-size="9" fill="var(--dim)">Throughput (speed)</text>
  <line x1="20" y1="46" x2="480" y2="46" stroke="var(--border)" stroke-width="0.5"/>
  <!-- Lead Time (top-left) -->
  <rect x="20" y="52" width="225" height="80" rx="8" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.08"/>
  <text x="132" y="72" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">Lead Time for Changes</text>
  <text x="132" y="88" text-anchor="middle" font-size="9" fill="var(--dim)">Commit to production</text>
  <rect x="36" y="96" width="88" height="22" rx="4" fill="var(--green)" fill-opacity="0.15" stroke="var(--green)" stroke-width="1"/>
  <text x="80" y="111" text-anchor="middle" font-size="8" fill="var(--green)">Elite: &lt; 1 hour</text>
  <rect x="136" y="96" width="96" height="22" rx="4" fill="var(--red)" fill-opacity="0.15" stroke="var(--red)" stroke-width="1"/>
  <text x="184" y="111" text-anchor="middle" font-size="8" fill="var(--red)">Low: 1-6 months</text>
  <!-- Deploy Frequency (top-right) -->
  <rect x="255" y="52" width="225" height="80" rx="8" stroke="var(--cyan)" stroke-width="2" fill="var(--cyan)" fill-opacity="0.08"/>
  <text x="367" y="72" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--cyan)">Deploy Frequency</text>
  <text x="367" y="88" text-anchor="middle" font-size="9" fill="var(--dim)">How often code ships</text>
  <rect x="271" y="96" width="88" height="22" rx="4" fill="var(--green)" fill-opacity="0.15" stroke="var(--green)" stroke-width="1"/>
  <text x="315" y="111" text-anchor="middle" font-size="8" fill="var(--green)">Elite: on demand</text>
  <rect x="371" y="96" width="96" height="22" rx="4" fill="var(--red)" fill-opacity="0.15" stroke="var(--red)" stroke-width="1"/>
  <text x="419" y="111" text-anchor="middle" font-size="8" fill="var(--red)">Low: 1-6 months</text>
  <!-- Stability label -->
  <text x="250" y="148" text-anchor="middle" font-size="9" fill="var(--dim)">Stability (quality)</text>
  <line x1="20" y1="152" x2="480" y2="152" stroke="var(--border)" stroke-width="0.5"/>
  <!-- MTTR (bottom-left) -->
  <rect x="20" y="158" width="225" height="80" rx="8" stroke="var(--gold)" stroke-width="2" fill="var(--gold)" fill-opacity="0.08"/>
  <text x="132" y="178" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--gold)">Mean Time to Restore</text>
  <text x="132" y="194" text-anchor="middle" font-size="9" fill="var(--dim)">Incident to recovery</text>
  <rect x="36" y="202" width="88" height="22" rx="4" fill="var(--green)" fill-opacity="0.15" stroke="var(--green)" stroke-width="1"/>
  <text x="80" y="217" text-anchor="middle" font-size="8" fill="var(--green)">Elite: &lt; 1 hour</text>
  <rect x="136" y="202" width="96" height="22" rx="4" fill="var(--red)" fill-opacity="0.15" stroke="var(--red)" stroke-width="1"/>
  <text x="184" y="217" text-anchor="middle" font-size="8" fill="var(--red)">Low: 1-6 months</text>
  <!-- Change Fail Rate (bottom-right) -->
  <rect x="255" y="158" width="225" height="80" rx="8" stroke="var(--pink)" stroke-width="2" fill="var(--pink)" fill-opacity="0.08"/>
  <text x="367" y="178" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--pink)">Change Fail Rate</text>
  <text x="367" y="194" text-anchor="middle" font-size="9" fill="var(--dim)">% of deploys causing failure</text>
  <rect x="271" y="202" width="88" height="22" rx="4" fill="var(--green)" fill-opacity="0.15" stroke="var(--green)" stroke-width="1"/>
  <text x="315" y="217" text-anchor="middle" font-size="8" fill="var(--green)">Elite: 0-5%</text>
  <rect x="371" y="202" width="96" height="22" rx="4" fill="var(--red)" fill-opacity="0.15" stroke="var(--red)" stroke-width="1"/>
  <text x="419" y="217" text-anchor="middle" font-size="8" fill="var(--red)">Low: 46-60%</text>
  <!-- Bottom note -->
  <text x="250" y="258" text-anchor="middle" font-size="9" fill="var(--dim)">Speed and stability are NOT trade-offs — elite performers excel at both.</text>
</svg>`,

6: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text)">Continuous Delivery Practices</text>
  <!-- Pipeline stages -->
  <rect x="14" y="60" width="68" height="38" rx="6" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.12"/>
  <text x="48" y="83" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--accent)">Commit</text>
  <line x1="84" y1="79" x2="100" y2="79" stroke="var(--dim)" stroke-width="1.5"/>
  <polygon points="98,75 106,79 98,83" fill="var(--dim)"/>
  <rect x="108" y="60" width="68" height="38" rx="6" stroke="var(--cyan)" stroke-width="2" fill="var(--cyan)" fill-opacity="0.12"/>
  <text x="142" y="83" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--cyan)">Build</text>
  <line x1="178" y1="79" x2="194" y2="79" stroke="var(--dim)" stroke-width="1.5"/>
  <polygon points="192,75 200,79 192,83" fill="var(--dim)"/>
  <rect x="202" y="60" width="68" height="38" rx="6" stroke="var(--gold)" stroke-width="2" fill="var(--gold)" fill-opacity="0.12"/>
  <text x="236" y="83" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--gold)">Test</text>
  <line x1="272" y1="79" x2="288" y2="79" stroke="var(--dim)" stroke-width="1.5"/>
  <polygon points="286,75 294,79 286,83" fill="var(--dim)"/>
  <rect x="296" y="60" width="68" height="38" rx="6" stroke="var(--green)" stroke-width="2" fill="var(--green)" fill-opacity="0.12"/>
  <text x="330" y="83" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--green)">Stage</text>
  <line x1="366" y1="79" x2="382" y2="79" stroke="var(--dim)" stroke-width="1.5"/>
  <polygon points="380,75 388,79 380,83" fill="var(--dim)"/>
  <rect x="390" y="60" width="74" height="38" rx="6" stroke="var(--pink)" stroke-width="2" fill="var(--pink)" fill-opacity="0.12"/>
  <text x="427" y="83" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--pink)">Deploy</text>
  <!-- Trunk-based dev feeding in -->
  <rect x="10" y="120" width="130" height="28" rx="5" stroke="var(--green)" stroke-width="1.5" fill="var(--green)" fill-opacity="0.08"/>
  <text x="75" y="138" text-anchor="middle" font-size="9" fill="var(--green)">Trunk-Based Dev</text>
  <line x1="75" y1="120" x2="48" y2="100" stroke="var(--green)" stroke-width="1" stroke-dasharray="4,3"/>
  <polygon points="45,103 50,98 53,106" fill="var(--green)"/>
  <!-- Short-lived branches note -->
  <text x="75" y="160" text-anchor="middle" font-size="8" fill="var(--dim)">Short-lived branches (&lt;1 day)</text>
  <text x="75" y="172" text-anchor="middle" font-size="8" fill="var(--dim)">merged frequently to main</text>
  <!-- Feature flags controlling release -->
  <rect x="340" y="120" width="130" height="28" rx="5" stroke="var(--gold)" stroke-width="1.5" fill="var(--gold)" fill-opacity="0.08"/>
  <text x="405" y="138" text-anchor="middle" font-size="9" fill="var(--gold)">Feature Flags</text>
  <line x1="405" y1="120" x2="427" y2="100" stroke="var(--gold)" stroke-width="1" stroke-dasharray="4,3"/>
  <polygon points="424,103 430,98 432,106" fill="var(--gold)"/>
  <!-- Feature flag details -->
  <text x="405" y="160" text-anchor="middle" font-size="8" fill="var(--dim)">Decouple deploy from release.</text>
  <text x="405" y="172" text-anchor="middle" font-size="8" fill="var(--dim)">Ship dark, enable gradually.</text>
  <!-- Automation bar -->
  <rect x="108" y="108" width="178" height="16" rx="3" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="197" y="120" text-anchor="middle" font-size="7" fill="var(--dim)">Automated (no manual gates)</text>
  <!-- Bottom note -->
  <rect x="30" y="190" width="440" height="36" rx="6" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)"/>
  <text x="250" y="206" text-anchor="middle" font-size="9" fill="var(--dim)">Key: every commit is potentially releasable. Small batches, fast feedback,</text>
  <text x="250" y="220" text-anchor="middle" font-size="9" fill="var(--gold)">automated testing at every stage. "If it hurts, do it more often."</text>
</svg>`,

7: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text)">Architecture for Flow (Conway's Law)</text>
  <!-- Org Structure -->
  <text x="130" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--cyan)">Org Structure</text>
  <rect x="30" y="58" width="80" height="32" rx="6" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" fill-opacity="0.1"/>
  <text x="70" y="78" text-anchor="middle" font-size="9" fill="var(--accent)">Team Alpha</text>
  <rect x="120" y="58" width="80" height="32" rx="6" stroke="var(--cyan)" stroke-width="1.5" fill="var(--cyan)" fill-opacity="0.1"/>
  <text x="160" y="78" text-anchor="middle" font-size="9" fill="var(--cyan)">Team Beta</text>
  <rect x="75" y="100" width="80" height="32" rx="6" stroke="var(--gold)" stroke-width="1.5" fill="var(--gold)" fill-opacity="0.1"/>
  <text x="115" y="120" text-anchor="middle" font-size="9" fill="var(--gold)">Team Gamma</text>
  <!-- Communication lines between teams -->
  <line x1="95" y1="90" x2="135" y2="90" stroke="var(--border)" stroke-width="1"/>
  <line x1="80" y1="90" x2="100" y2="100" stroke="var(--border)" stroke-width="1"/>
  <line x1="150" y1="90" x2="130" y2="100" stroke="var(--border)" stroke-width="1"/>
  <!-- Mirrors arrow -->
  <text x="250" y="82" text-anchor="middle" font-size="9" fill="var(--dim)">mirrors</text>
  <line x1="215" y1="86" x2="275" y2="86" stroke="var(--dim)" stroke-width="1.5"/>
  <polygon points="273,82 281,86 273,90" fill="var(--dim)"/>
  <!-- System Architecture -->
  <text x="380" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--green)">System Architecture</text>
  <rect x="290" y="58" width="80" height="32" rx="6" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" fill-opacity="0.1"/>
  <text x="330" y="78" text-anchor="middle" font-size="9" fill="var(--accent)">Service A</text>
  <rect x="380" y="58" width="80" height="32" rx="6" stroke="var(--cyan)" stroke-width="1.5" fill="var(--cyan)" fill-opacity="0.1"/>
  <text x="420" y="78" text-anchor="middle" font-size="9" fill="var(--cyan)">Service B</text>
  <rect x="335" y="100" width="80" height="32" rx="6" stroke="var(--gold)" stroke-width="1.5" fill="var(--gold)" fill-opacity="0.1"/>
  <text x="375" y="120" text-anchor="middle" font-size="9" fill="var(--gold)">Service C</text>
  <!-- API lines between services -->
  <line x1="355" y1="90" x2="395" y2="90" stroke="var(--border)" stroke-width="1"/>
  <line x1="340" y1="90" x2="360" y2="100" stroke="var(--border)" stroke-width="1"/>
  <line x1="410" y1="90" x2="390" y2="100" stroke="var(--border)" stroke-width="1"/>
  <!-- Conway's Law statement -->
  <rect x="30" y="146" width="440" height="30" rx="6" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)"/>
  <text x="250" y="165" text-anchor="middle" font-size="9" fill="var(--dim)">Conway's Law: "Organizations design systems that mirror their communication structures."</text>
  <!-- Inverse Conway -->
  <text x="250" y="200" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--pink)">Inverse Conway Maneuver</text>
  <rect x="50" y="210" width="160" height="32" rx="6" stroke="var(--green)" stroke-width="2" fill="var(--green)" fill-opacity="0.1"/>
  <text x="130" y="226" text-anchor="middle" font-size="9" fill="var(--green)">Desired Architecture</text>
  <text x="250" y="230" text-anchor="middle" font-size="9" fill="var(--dim)">drives</text>
  <line x1="215" y1="226" x2="280" y2="226" stroke="var(--pink)" stroke-width="2"/>
  <polygon points="278,222 286,226 278,230" fill="var(--pink)"/>
  <rect x="290" y="210" width="160" height="32" rx="6" stroke="var(--pink)" stroke-width="2" fill="var(--pink)" fill-opacity="0.1"/>
  <text x="370" y="226" text-anchor="middle" font-size="9" fill="var(--pink)">Team Structure</text>
  <text x="250" y="260" text-anchor="middle" font-size="9" fill="var(--gold)">Shape teams to match the architecture you want, not the other way around.</text>
</svg>`,

8: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text)">Lean Management &amp; Culture</text>
  <text x="250" y="38" text-anchor="middle" font-size="9" fill="var(--dim)">Westrum Organizational Culture Typology</text>
  <!-- Gradient bar -->
  <defs>
    <linearGradient id="cultureGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="var(--red)" stop-opacity="0.5"/>
      <stop offset="50%" stop-color="var(--gold)" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="var(--green)" stop-opacity="0.5"/>
    </linearGradient>
  </defs>
  <rect x="40" y="52" width="420" height="30" rx="8" fill="url(#cultureGrad)" stroke="var(--border)" stroke-width="1"/>
  <!-- Labels on the bar -->
  <text x="110" y="72" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--red)">Pathological</text>
  <text x="250" y="72" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--gold)">Bureaucratic</text>
  <text x="390" y="72" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--green)">Generative</text>
  <!-- Pathological traits -->
  <rect x="30" y="94" width="138" height="100" rx="6" stroke="var(--red)" stroke-width="1.5" fill="var(--red)" fill-opacity="0.06"/>
  <text x="99" y="112" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--red)">Power-oriented</text>
  <text x="99" y="128" text-anchor="middle" font-size="8" fill="var(--dim)">Low cooperation</text>
  <text x="99" y="142" text-anchor="middle" font-size="8" fill="var(--dim)">Messengers shot</text>
  <text x="99" y="156" text-anchor="middle" font-size="8" fill="var(--dim)">Failure leads to blame</text>
  <text x="99" y="170" text-anchor="middle" font-size="8" fill="var(--dim)">Novelty is crushed</text>
  <text x="99" y="184" text-anchor="middle" font-size="8" fill="var(--dim)">Information is hoarded</text>
  <!-- Bureaucratic traits -->
  <rect x="181" y="94" width="138" height="100" rx="6" stroke="var(--gold)" stroke-width="1.5" fill="var(--gold)" fill-opacity="0.06"/>
  <text x="250" y="112" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--gold)">Rule-oriented</text>
  <text x="250" y="128" text-anchor="middle" font-size="8" fill="var(--dim)">Modest cooperation</text>
  <text x="250" y="142" text-anchor="middle" font-size="8" fill="var(--dim)">Messengers tolerated</text>
  <text x="250" y="156" text-anchor="middle" font-size="8" fill="var(--dim)">Failure leads to justice</text>
  <text x="250" y="170" text-anchor="middle" font-size="8" fill="var(--dim)">Novelty = problems</text>
  <text x="250" y="184" text-anchor="middle" font-size="8" fill="var(--dim)">Information is ignored</text>
  <!-- Generative traits -->
  <rect x="332" y="94" width="138" height="100" rx="6" stroke="var(--green)" stroke-width="1.5" fill="var(--green)" fill-opacity="0.06"/>
  <text x="401" y="112" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--green)">Performance-oriented</text>
  <text x="401" y="128" text-anchor="middle" font-size="8" fill="var(--dim)">High cooperation</text>
  <text x="401" y="142" text-anchor="middle" font-size="8" fill="var(--dim)">Messengers are trained</text>
  <text x="401" y="156" text-anchor="middle" font-size="8" fill="var(--dim)">Failure leads to inquiry</text>
  <text x="401" y="170" text-anchor="middle" font-size="8" fill="var(--dim)">Novelty is implemented</text>
  <text x="401" y="184" text-anchor="middle" font-size="8" fill="var(--dim)">Information is shared</text>
  <!-- Arrow showing desired direction -->
  <line x1="60" y1="210" x2="440" y2="210" stroke="var(--green)" stroke-width="2"/>
  <polygon points="438,206 448,210 438,214" fill="var(--green)"/>
  <text x="250" y="208" text-anchor="middle" font-size="8" fill="var(--green)">Direction of improvement</text>
  <!-- Bottom note -->
  <text x="250" y="238" text-anchor="middle" font-size="9" fill="var(--dim)">Generative culture predicts higher software delivery AND organizational performance.</text>
</svg>`,

9: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text)">Value Stream Mapping</text>
  <!-- Process boxes -->
  <rect x="10" y="68" width="62" height="38" rx="6" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.12"/>
  <text x="41" y="91" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--accent)">Request</text>
  <line x1="74" y1="87" x2="88" y2="87" stroke="var(--dim)" stroke-width="1.5"/>
  <polygon points="86,83 94,87 86,91" fill="var(--dim)"/>
  <rect x="96" y="68" width="62" height="38" rx="6" stroke="var(--cyan)" stroke-width="2" fill="var(--cyan)" fill-opacity="0.12"/>
  <text x="127" y="91" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--cyan)">Dev</text>
  <line x1="160" y1="87" x2="174" y2="87" stroke="var(--dim)" stroke-width="1.5"/>
  <polygon points="172,83 180,87 172,91" fill="var(--dim)"/>
  <rect x="182" y="68" width="62" height="38" rx="6" stroke="var(--gold)" stroke-width="2" fill="var(--gold)" fill-opacity="0.12"/>
  <text x="213" y="91" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--gold)">Review</text>
  <line x1="246" y1="87" x2="260" y2="87" stroke="var(--dim)" stroke-width="1.5"/>
  <polygon points="258,83 266,87 258,91" fill="var(--dim)"/>
  <rect x="268" y="68" width="62" height="38" rx="6" stroke="var(--green)" stroke-width="2" fill="var(--green)" fill-opacity="0.12"/>
  <text x="299" y="91" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--green)">Test</text>
  <line x1="332" y1="87" x2="346" y2="87" stroke="var(--dim)" stroke-width="1.5"/>
  <polygon points="344,83 352,87 344,91" fill="var(--dim)"/>
  <rect x="354" y="68" width="62" height="38" rx="6" stroke="var(--pink)" stroke-width="2" fill="var(--pink)" fill-opacity="0.12"/>
  <text x="385" y="91" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--pink)">Deploy</text>
  <line x1="418" y1="87" x2="432" y2="87" stroke="var(--dim)" stroke-width="1.5"/>
  <polygon points="430,83 438,87 430,91" fill="var(--dim)"/>
  <rect x="440" y="68" width="50" height="38" rx="6" stroke="var(--green)" stroke-width="2" fill="var(--green)" fill-opacity="0.2"/>
  <text x="465" y="91" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--green)">Done</text>
  <!-- Wait times (above arrows) -->
  <text x="85" y="62" text-anchor="middle" font-size="7" fill="var(--red)">wait</text>
  <text x="85" y="52" text-anchor="middle" font-size="7" fill="var(--red)">3d</text>
  <text x="171" y="62" text-anchor="middle" font-size="7" fill="var(--red)">wait</text>
  <text x="171" y="52" text-anchor="middle" font-size="7" fill="var(--red)">1d</text>
  <text x="257" y="62" text-anchor="middle" font-size="7" fill="var(--red)">wait</text>
  <text x="257" y="52" text-anchor="middle" font-size="7" fill="var(--red)">2d</text>
  <text x="343" y="62" text-anchor="middle" font-size="7" fill="var(--red)">wait</text>
  <text x="343" y="52" text-anchor="middle" font-size="7" fill="var(--red)">1d</text>
  <text x="429" y="62" text-anchor="middle" font-size="7" fill="var(--red)">wait</text>
  <text x="429" y="52" text-anchor="middle" font-size="7" fill="var(--red)">0.5d</text>
  <!-- Process times (below boxes) -->
  <text x="41" y="120" text-anchor="middle" font-size="7" fill="var(--green)">0.5d</text>
  <text x="127" y="120" text-anchor="middle" font-size="7" fill="var(--green)">3d</text>
  <text x="213" y="120" text-anchor="middle" font-size="7" fill="var(--green)">0.5d</text>
  <text x="299" y="120" text-anchor="middle" font-size="7" fill="var(--green)">1d</text>
  <text x="385" y="120" text-anchor="middle" font-size="7" fill="var(--green)">0.25d</text>
  <!-- Lead time bar -->
  <line x1="10" y1="144" x2="490" y2="144" stroke="var(--red)" stroke-width="2"/>
  <text x="250" y="140" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--red)">Lead Time = 12.75 days (total elapsed)</text>
  <!-- Process time bar -->
  <line x1="10" y1="164" x2="280" y2="164" stroke="var(--green)" stroke-width="2"/>
  <text x="145" y="160" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--green)">Process Time = 5.25 days (value-add work)</text>
  <!-- Efficiency calculation -->
  <rect x="60" y="182" width="380" height="52" rx="6" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)"/>
  <text x="250" y="200" text-anchor="middle" font-size="9" fill="var(--dim)">Flow Efficiency = Process Time / Lead Time = 5.25 / 12.75 = 41%</text>
  <text x="250" y="216" text-anchor="middle" font-size="9" fill="var(--gold)">Typical teams: 15-20%. Goal: identify and reduce wait times (waste).</text>
  <!-- Legend -->
  <rect x="60" y="240" width="10" height="8" rx="2" fill="var(--red)" fill-opacity="0.3"/>
  <text x="76" y="248" font-size="8" fill="var(--dim)">= wait time (waste)</text>
  <rect x="180" y="240" width="10" height="8" rx="2" fill="var(--green)" fill-opacity="0.3"/>
  <text x="196" y="248" font-size="8" fill="var(--dim)">= process time (value)</text>
</svg>`,

10: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text)">Measuring &amp; Improving: SPACE Framework</text>
  <!-- Pentagon / Radar chart -->
  <!-- Center point at 250, 148. Radius ~90 -->
  <!-- 5 points of pentagon (top, top-right, bottom-right, bottom-left, top-left) -->
  <!-- Angles: -90, -18, 54, 126, 198 degrees -->
  <!-- Outer pentagon -->
  <polygon points="250,58 335.6,120.2 303,210 197,210 164.4,120.2" stroke="var(--border)" stroke-width="1" fill="none"/>
  <!-- Mid pentagon -->
  <polygon points="250,88 310.4,129.4 288,183.3 212,183.3 189.6,129.4" stroke="var(--border)" stroke-width="0.5" fill="none" stroke-dasharray="3,3"/>
  <!-- Inner pentagon -->
  <polygon points="250,118 285.2,138.7 273,156.7 227,156.7 214.8,138.7" stroke="var(--border)" stroke-width="0.5" fill="none" stroke-dasharray="3,3"/>
  <!-- Data polygon (sample "scores") -->
  <polygon points="250,72 328,126 298,200 204,195 175,125" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.1"/>
  <!-- Axis lines from center to each vertex -->
  <line x1="250" y1="148" x2="250" y2="58" stroke="var(--border)" stroke-width="0.5"/>
  <line x1="250" y1="148" x2="335.6" y2="120.2" stroke="var(--border)" stroke-width="0.5"/>
  <line x1="250" y1="148" x2="303" y2="210" stroke="var(--border)" stroke-width="0.5"/>
  <line x1="250" y1="148" x2="197" y2="210" stroke="var(--border)" stroke-width="0.5"/>
  <line x1="250" y1="148" x2="164.4" y2="120.2" stroke="var(--border)" stroke-width="0.5"/>
  <!-- Data points -->
  <circle cx="250" cy="72" r="4" fill="var(--cyan)" stroke="var(--cyan)" stroke-width="1"/>
  <circle cx="328" cy="126" r="4" fill="var(--accent)" stroke="var(--accent)" stroke-width="1"/>
  <circle cx="298" cy="200" r="4" fill="var(--gold)" stroke="var(--gold)" stroke-width="1"/>
  <circle cx="204" cy="195" r="4" fill="var(--green)" stroke="var(--green)" stroke-width="1"/>
  <circle cx="175" cy="125" r="4" fill="var(--pink)" stroke="var(--pink)" stroke-width="1"/>
  <!-- Labels at each vertex -->
  <text x="250" y="46" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--cyan)">Satisfaction</text>
  <text x="354" y="118" text-anchor="start" font-size="10" font-weight="bold" fill="var(--accent)">Performance</text>
  <text x="314" y="218" text-anchor="start" font-size="10" font-weight="bold" fill="var(--gold)">Activity</text>
  <text x="130" y="218" text-anchor="end" font-size="10" font-weight="bold" fill="var(--green)">Communication</text>
  <text x="148" y="118" text-anchor="end" font-size="10" font-weight="bold" fill="var(--pink)">Efficiency</text>
  <!-- Descriptions -->
  <rect x="20" y="232" width="460" height="36" rx="6" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)"/>
  <text x="250" y="248" text-anchor="middle" font-size="8" fill="var(--dim)">S = developer satisfaction &amp; well-being | P = quality of output | A = actions count (use carefully)</text>
  <text x="250" y="260" text-anchor="middle" font-size="8" fill="var(--dim)">C = collaboration &amp; knowledge sharing | E = flow with minimal interruption &amp; delay</text>
</svg>`
};
