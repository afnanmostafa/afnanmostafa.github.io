# LAMMPS with KOKKOS/GPU Build Guide (A40, CUDA 12.2)

This guide walks through building LAMMPS from source with GPU acceleration via the KOKKOS package. It is tested on an HPC system with NVIDIA A40 GPUs and CUDA 12.2.

---

## 1. Load Required Modules

```bash
module purge
module load gcc/10.3.0
module load cuda/12.2
module load cmake
module load openmpi
```

---

## 2. Clone LAMMPS Repository

```bash
git clone -b stable https://github.com/lammps/lammps.git
cd lammps
```

---

## 3. Create Build Directory and Configure with CMake

```bash
mkdir build-kokkos
cd build-kokkos
```

Clear the cache if re-running:

```bash
rm -rf CMakeCache.txt CMakeFiles
```

Then configure:

```bash
cmake ../cmake \
  -D CMAKE_BUILD_TYPE=Release \
  -D BUILD_MPI=on \
  -D BUILD_OMP=on \
  -D PKG_KOKKOS=on \
  -D Kokkos_ENABLE_CUDA=ON \
  -D Kokkos_ENABLE_MPI=ON \
  -D Kokkos_ENABLE_OPENMP=ON \
  -D Kokkos_ARCH_AMPERE86=ON \
  -D LAMMPS_MACHINE=kokkos \
  -D BUILD_SHARED_LIBS=off
```

---

## 4. Compile LAMMPS

```bash
make -j 8
```

---

## 5. Create Test Input Script (`in.lj_kokkos`)

```lammps
units       lj
atom_style  atomic
dimension   3
boundary    p p p
lattice     fcc 0.8442
region      box block 0 10 0 10 0 10
create_box  1 box
create_atoms 1 box
mass        1 1.0

velocity    all create 1.44 87287 loop geom

pair_style  lj/cut/kk 2.5
pair_coeff  * * 1.0 1.0 2.5

neighbor    0.3 bin
neigh_modify every 20 delay 0 check no

fix         1 all nve
thermo      100
run         1000
```

---

## 6. Run LAMMPS with GPU and KOKKOS

```bash
OMP_PROC_BIND=spread OMP_PLACES=threads mpirun -np 1 ./lmp_kokkos -k on g 1 -sf kk -in in.lj_kokkos
```

---

## 7. Optional: Monitor GPU Usage

```bash
watch -n 1 nvidia-smi
```

---

## Notes

- Use `gcc ≤ 10` for CUDA compatibility.
- Always include `-sf kk` to enable KOKKOS-accelerated styles.
- `Kokkos_ENABLE_OPENMP` ensures host execution space is defined.
