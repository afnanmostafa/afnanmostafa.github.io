---
layout: page
title: "Codes/Scripts"
image: challenger.jpg
permalink: /tutorials/
---
---

# Solving Finite Element Code in MATLAB

- [Main script]( {{ site.baseurl }}/assets/scripts/FEM/main_script_FEM_AfnanMostafa.m ) [<span style="color:#FF9900">[view code]</span>]({{ site.baseurl }}/assets/scripts/FEM/main_script_FEM_AfnanMostafa.txt )
- [Function: Gauss Integral for Q4 element in iso-parametric space]( {{ site.baseurl }}/assets/scripts/FEM/GaussQuadQ4.m ) [<span style="color:#FF9900">[view code]</span>]({{ site.baseurl }}/assets/scripts/FEM/GaussQuadQ4.txt )
- Find all the codes in [<span style="color:#FF9900">my GitHub repo</span>](https://github.com/afnanmostafa/Finite-Elements-ME254/tree/main/Final%20Project) 

---
---

Building LAMMPS with GPU or KOKKOS package:
- [README]( {{ site.baseurl }}/assets/scripts/LAMMPS_KOKKOS_GPU_BUILD_GUIDE.md )

---
---

# Molecular Dynamics (MD)

Here are a few sample LAMMPS scripts for:

- Uniaxial Deformation
- Shock Simulation
- Thermal Conductivity Analysis

## Uniaxial Deformation

#### Uniaxial compression
- [Download uniaxial compression script]( {{ site.baseurl }}/assets/scripts/compression.in )
- for more info --> [<span style="color:#FF9900">Check out our CMS article</span>](https://doi.org/10.1016/j.commatsci.2024.113273) 

#### Uniaxial tension
- [Download uniaxial tension script]( {{ site.baseurl }}/assets/scripts/tension.in ) [coming soon]
- for more info --> [<span style="color:#FF9900">Check out our CMS article</span>](https://doi.org/10.1016/j.commatsci.2024.113273) 

#### Simple (edge) shear
- [Download shear script]( {{ site.baseurl }}/assets/scripts/shear.in ) [coming soon]
- for more info --> [<span style="color:#FF9900">Check out our JAP article</span>](https://doi.org/10.1063/5.0168767) 

---
---

## Shock Simulation

<span style="color:#ffd733">Food for thought 1:</span> Why do we simulate uniaxial compression/tension in MD codes with a strain rate of 10<sup>8</sup> or 10<sup>9</sup> s<sup>-1</sup> and how come we do not even observe any shock waves?
<form action="https://formspree.io/f/movevpbr" method="POST">
    <textarea name="response" rows="4" placeholder="Write your response here anonymously..."></textarea>
    <br>
    <button type="submit">Submit</button>
</form>

---

<span style="color:#ffd733">Food for thought 2:</span> Does Poisson’s ratio influence shock compression? Specifically, does the lateral dimension expand in response to compression along the shock direction?
<form action="https://formspree.io/f/xanenlzj" method="POST">
    <textarea name="response" rows="4" placeholder="Write your response here anonymously..."></textarea>
    <br>
    <button type="submit">Submit</button>
</form>

---

This tutorial provides a LAMMPS script for shock simulation.
- [View shock simulation pseudocode theory]( {{ site.baseurl }}/assets/scripts/Shock_NEMD_movingpiston.png )
- [Download shock simulation pseudocode]( {{ site.baseurl }}/assets/scripts/MD-pseudocode--shock.in )

<span style="color:#ffd733">Hugoniot vs. Rayleigh:</span>
<video width="80%" controls>
    <source src="{{ site.baseurl }}/assets/videos/Hugoniot.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

---
---

## Modifying EAM interatomic potential (modifying LAMMPS C++ source codes)

- [View how-to]( {{ site.baseurl }}/assets/Images/Tuning-Pair-Potential-EAM.png )
- [Check out our Acta Materialia paper for details](https://doi.org/10.1016/j.actamat.2025.120889) [section 4.2 in main text and Figs. S3 & S4 of the supplementary file]
- [Download the modified codes] (coming soon)

---
---

## Thermal Conductivity Analysis
#### Muller-Plathe Method (reverse non-equilibrium molecular dynamics)
- [Download rNEMD script]( {{ site.baseurl }}/assets/scripts/rnemd.in )
- for more info --> [<span style="color:#FF9900">Check out our APL letter</span>](https://doi.org/10.1063/5.0140769) 

#### Green-Kubo Method (equilibrium molecular dynamics)
- [Download EMD script]( {{ site.baseurl }}/assets/scripts/emd.in )
- for more info --> [<span style="color:#FF9900">Check out our APL letter</span>](https://doi.org/10.1063/5.0140769) 

---
---

# OVITO 

#### Calculate atomic level von Mises stress from per-atom stress tensors
- [Download OVITO file (binary file, open inside OVITO as a new modifier)]( {{ site.baseurl }}/assets/scripts/get_atomit_vonMises_stress.ovmod )

---
---

# Bash 

#### Edit repeating entries in a LAMMPS restart file to use as a continuation of previous file
- [Download bash script]( {{ site.baseurl }}/assets/scripts/edit_restart_file_index_for_plotting.sh ) [<span style="color:#FF9900">[view code]</span>]({{ site.baseurl }}/assets/scripts/edit_restart_file_index_for_plotting.txt )
- for sample files & worked-out example --> [See GitHub repo](https://github.com/afnanmostafa/LAMMPS-processing/tree/main/src/edit_certain_repeating_entries_only) 

#### Remove velocities (or any other unwanted properties) from xyz or data file
- [Download bash script]( {{ site.baseurl }}/assets/scripts/remove_redundant_info.sh ) [<span style="color:#FF9900">[view code]</span>]({{ site.baseurl }}/assets/scripts/remove_redundant_info.txt )
- for sample files & worked-out example --> [See GitHub repo](https://github.com/afnanmostafa/LAMMPS-processing/tree/main/src/remove_velocities_from_lammpsFile) 

---
---

# Gnuplot 

#### Automating axes decor 
- [Download GnuPlot script]( {{ site.baseurl }}/assets/scripts/fix_axes.gp ) [<span style="color:#FF9900">[view code]</span>]({{ site.baseurl }}/assets/scripts/fix_axes.txt )

---
---

# ASME IMECE 2024 Poster Symposium

- [View poster]( {{ site.baseurl }}/assets/2024 IMECE NSF Poster_Research ID--150414--AfnanMostafa.pdf )


<!-- <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fafnanmostafa.github.io%2Ftutorials%2F&count_bg=%2379C83D&title_bg=%23555555&icon=verizon.svg&icon_color=%23DAE1B1&title=lurker&edge_flat=false"/></a> -->


<div style="text-align: center; margin-top: 20px;">
  <a href="https://hits.sh/afnanmostafa.github.io/tutorials/">
    <img 
      alt="Hits" 
      src="https://hits.sh/afnanmostafa.github.io/tutorials.svg?view=today-total&style=plastic&label=geeky%20lurkers%20(today%2Ftotal)&extraCount=500&color=126bf5"
    />
  </a>
  <br>
  <small style="color: #888; font-style: italic;">
    P.S. 'SeeYouFarm' counter is discontinued :(!
  </small>
</div>

