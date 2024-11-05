#####
# Afnan Mostafa
# removes velocities (or any other unwanted properties) from OVITO-dumped xyz file or data file
# input file --> post_cg.data
# temporary files --> temp*.data
# for sample files & worked-out example --> https://github.com/afnanmostafa/LAMMPS-processing/tree/main/src/remove_velocities_from_lammpsFile
#####


#!/bin/bash

sed -n '/Atoms/,/Velocities/p' post_cg.data > temp1.data

awk '{print}' temp1.data | grep [0-9].* > temp2.data

sort -n $1 temp2.data > temp3.data

awk '1;/Atoms/{exit}' post_cg.data > final.data

echo "" >> final.data

cat temp3.data >> final.data

rm 'temp1.data' 'temp2.data' 'temp3.data'

less final.data

