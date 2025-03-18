---
layout: page
title: "Codes/Scripts"
image: challenger.jpg
permalink: /tutorials/
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

## Shock Simulation

Food for thought: Why do we simulate uniaxial compression/tension in MD codes with a strain rate of 10^8 or 10^9 s^(-1) and how come we do not observe any shock waves? 

<h3>Share your thoughts anonymously:</h3>
<form action="https://formspree.io/f/movevpbr" method="POST">
    <textarea name="response" rows="4" placeholder="Write your response here..."></textarea>
    <br>
    <button type="submit">Submit</button>
</form>

This tutorial provides a LAMMPS script for shock simulation.
- [Download shock simulation script]( {{ site.baseurl }}/assets/scripts/shock_simulation.in )

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
