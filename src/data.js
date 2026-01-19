// Data configuration for the HPC & AI course
export const courseData = {
    title: 'HPC & AI Systems Engineering Course',
    roadmap: {
        phases: [
            {
                id: 'foundations',
                title: 'Phase 1: Foundations',
                duration: '4-6 weeks',
                topics: [
                    { id: 'arch', name: 'Computer Architecture', icon: 'cpu' },
                    { id: 'os', name: 'Operating Systems & Linux', icon: 'code' },
                    { id: 'networks', name: 'Networking Fundamentals', icon: 'network' },
                    { id: 'parallel', name: 'Parallel Computing Concepts', icon: 'zap' }
                ]
            },
            {
                id: 'hpc-core',
                title: 'Phase 2: HPC Core',
                duration: '6-8 weeks',
                topics: [
                    { id: 'clusters', name: 'HPC Cluster Architecture', icon: 'database' },
                    { id: 'schedulers', name: 'Job Schedulers (Slurm, PBS)', icon: 'git-branch' },
                    { id: 'mpi', name: 'MPI Programming', icon: 'code' },
                    { id: 'openmp', name: 'OpenMP & Threading', icon: 'zap' }
                ]
            },
            {
                id: 'gpu-ai',
                title: 'Phase 3: GPU Computing & AI',
                duration: '6-8 weeks',
                topics: [
                    { id: 'cuda', name: 'CUDA Programming', icon: 'cpu' },
                    { id: 'pytorch', name: 'PyTorch & Deep Learning', icon: 'trending-up' },
                    { id: 'dist', name: 'Distributed Training', icon: 'network' },
                    { id: 'opt', name: 'ML Optimization', icon: 'zap' }
                ]
            },
            {
                id: 'advanced',
                title: 'Phase 4: Advanced Topics',
                duration: '4-6 weeks',
                topics: [
                    { id: 'prof', name: 'Performance Profiling', icon: 'trending-up' },
                    { id: 'io', name: 'Parallel I/O & Storage', icon: 'database' },
                    { id: 'cont', name: 'Containerization', icon: 'code' },
                    { id: 'cicd', name: 'CI/CD for HPC', icon: 'git-branch' }
                ]
            }
        ]
    },
    resources: {
        books: [
            { title: 'Introduction to HPC for Scientists and Engineers', author: 'Hager & Wellein', level: 'Beginner' },
            { title: 'Parallel Programming in C with MPI and OpenMP', author: 'Quinn', level: 'Intermediate' },
            { title: 'Programming Massively Parallel Processors', author: 'Kirk & Hwu', level: 'Intermediate' },
            { title: 'Deep Learning', author: 'Goodfellow, Bengio, Courville', level: 'Intermediate' }
        ],
        videos: [
            { title: 'MIT 6.172: Performance Engineering', platform: 'MIT OCW' },
            { title: 'NVIDIA Deep Learning Institute', platform: 'NVIDIA' },
            { title: 'Intro to Parallel Programming (CUDA)', platform: 'Udacity' }
        ],
        labs: [
            { title: 'MPI Hands-on Tutorial', desc: 'Point-to-point and collective operations', diff: 'Beginner' },
            { title: 'CUDA Matrix Multiplication', desc: 'Optimize matrix ops on GPU', diff: 'Intermediate' },
            { title: 'Distributed PyTorch Training', desc: 'Multi-GPU training', diff: 'Advanced' }
        ]
    },
    cheatsheets: [
        {
            id: 'linux',
            title: 'Linux Commands',
            cmds: [
                { cmd: 'ls -lah', desc: 'List files with details' },
                { cmd: 'chmod +x file', desc: 'Make executable' },
                { cmd: 'grep -r "text" .', desc: 'Search recursively' },
                { cmd: 'top', desc: 'Monitor processes' }
            ]
        },
        {
            id: 'slurm',
            title: 'Slurm Commands',
            cmds: [
                { cmd: 'sbatch job.sh', desc: 'Submit batch job' },
                { cmd: 'squeue -u $USER', desc: 'View your jobs' },
                { cmd: 'scancel <id>', desc: 'Cancel job' },
                { cmd: 'sinfo', desc: 'Cluster status' }
            ]
        }
    ],
    summaries: [
        {
            id: 'parallel',
            title: 'Parallel Computing Fundamentals',
            points: [
                'Concurrency vs Parallelism: Concurrency deals with multiple tasks, parallelism executes them simultaneously',
                'Speedup: S = T₁/Tₚ measures performance gain',
                'Amdahl\'s Law: Speedup limited by sequential portion = 1/(s + p/n)',
                'Paradigms: Shared memory (OpenMP), distributed (MPI), hybrid'
            ]
        },
        {
            id: 'mpi',
            title: 'MPI Concepts',
            points: [
                'MPI_Send vs MPI_Isend: Send is blocking, Isend is non-blocking',
                'Collective operations: Broadcast, Reduce, AllGather, Scatter',
                'Process topology: Cartesian and graph topology support',
                'Communicators: Define process groups and scope of operations'
            ]
        }
    ],
    flashcards: [
        { question: "What is Amdahl's Law?", answer: "Speedup = 1 / (s + p/n) where s is sequential fraction and p is parallel fraction" },
        { question: "MPI_Send vs MPI_Isend?", answer: "Send is blocking, Isend is non-blocking" },
        { question: "What is GPU occupancy?", answer: "Ratio of active warps to max warps on SM" },
        { question: "What is a warp?", answer: "32 CUDA threads executing in lockstep on GPU" },
        { question: "OpenMP or MPI for shared memory?", answer: "OpenMP is for shared memory programming" }
    ]
};
