---
layout: default
title: Experience
---

<h1>Research Experience</h1>

<p>
  <strong>Graduate Research Assistant</strong> · Stony Brook University<br>
  Advisor: Prof. Fan Ye (IEEE Fellow) · Sep. 2024 – present
</p>

<h2>Multimodal Dataset Collection, Curation, and Quality Assessment</h2>
<p><em>Mar. 2025 – present</em></p>
<ul>
  <li>
    Led data acquisition and curation for <strong>113 long-duration sessions</strong> of continuous
    activities of daily living (ADLs) in a four-room apartment sensing dataset, integrating
    <strong>16 UWB sensors</strong> on 16 Raspberry Pis, <strong>6 Kinect</strong> video/depth cameras,
    and <strong>3 wearable</strong> watches/fingertips to support home-health monitoring.
  </li>
  <li>
    Developed and maintained an Android data-collection app and structured protocol with participant
    guidance and timestamped activity annotations, enabling repeatable multimodal recordings for
    downstream activity recognition, localization, and vital-sign monitoring research.
  </li>
  <li>
    Implemented automated data-quality and metadata workflows to check recording integrity,
    modality availability, and session-level consistency across heterogeneous sensing modalities.
  </li>
  <li>
    Mentored undergrad/master’s students in data collection, metadata acquisition, quality assessment,
    and Android application development.
  </li>
</ul>

<br>

<h2>Multi-Sensor Fusion for Robust Indoor Human Localization and Tracking (ScoreKFT)</h2>
<p><em>Nov. 2024 – Feb. 2026</em></p>
<ul>
  <li>
    Identified unreliable range estimation under multipath, occlusion, and clutter as a key obstacle
    to contactless indoor human tracking during continuous ADLs in home and senior-care environments.
  </li>
  <li>
    Developed <strong>ScoreKFT</strong>, a physics-informed range estimation and particle-filter-based
    multi-sensor fusion framework integrating 16 UWB sensors, achieving
    <strong>0.958 m range RMSE</strong> and over <strong>30% lower error</strong> than representative baselines.
  </li>
  <li>
    Built a DBSCAN-based ground-truth pipeline from Kinect video/depth data to reconstruct human
    positions and trajectories without prescribed walking paths.
  </li>
  <li>
    Evaluated continuous localization and tracking across <strong>12 long-duration ADL sessions</strong>
    using cross-modal depth-derived references in a fully furnished four-room apartment.
  </li>
  <li>
    Outcome: first-author paper <strong>accepted</strong> at IEEE GLOBECOM 2026
    (see <a href="/pub">Publication</a>).
  </li>
</ul>

<br>

<h2>Cross-Population Generalization Evaluation for ADL Recognition (ADL-CLIP)</h2>
<p><em>July 2026 – present</em></p>
<ul>
  <li>
    Reproduced a Transformer-based RF–text contrastive learning framework with PELT-based temporal
    segmentation and iterative representation refinement for continuous ADL detection.
  </li>
  <li>
    Conducted cross-population training and evaluation experiments for the ongoing journal extension,
    using Slurm-managed NVIDIA H200/B40 GPU clusters and troubleshooting PyTorch/CUDA environments
    to assess model generalization across participant populations.
  </li>
</ul>

<br>
<br>

<h1>Undergraduate Research</h1>

<h2>Adaptive Video Streaming Processing under Energy Constraints</h2>
<p>
  Department of Computer Science, Shanghai Jiao Tong University<br>
  Supervisor: <a href="https://www.cs.sjtu.edu.cn/~lijie/">Prof. Jie Li</a>
</p>
<ul>
  <li>
    Collaborated with Ph.D. students on optimizing edge-server video streaming under long-term energy
    constraints using a multi-agent reinforcement learning approach.
  </li>
  <li>
    Improved the deep reinforcement learning code framework for video compression and offloading,
    and analyzed the impact of activation functions, learning rates, and exploration strategies.
  </li>
  <li>
    Co-authored a paper published at IEEE GLOBECOM 2023 (second author).
  </li>
</ul>
