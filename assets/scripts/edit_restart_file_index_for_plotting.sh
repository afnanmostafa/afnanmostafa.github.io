#####
# Afnan Mostafa
# edits the first entry if there are only 3 fields in a line (NF==3)
# good for rNEMD restart run in LAMMPS or any other general purposes
# $1=$1+10000000 --> 10000000 is the last step of first run and 10000001 is the first step of new restart file
# for sample files & worked-out example --> https://github.com/afnanmostafa/LAMMPS-processing/tree/main/src/edit_certain_repeating_entries_only
#####


#!/bin/bash


awk '{
	if (NF==3)
	$1=$1+10000000;
	print;
	}' sample.data > edited.data

less edited.data

diff sample.data edited.data > diff_sample_edited.data
