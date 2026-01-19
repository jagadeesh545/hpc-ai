import * as LucideIcons from 'lucide-react'

const iconMap = {
  'hpc': 'Cpu',
  'parallel': 'Zap',
  'distributed': 'Network',
  'cluster': 'Grid3x3',
  'gpu': 'Zap',
  'mpi': 'GitBranch',
  'openmp': 'Layers',
  'cuda': 'Zap',
  'optimization': 'TrendingUp',
  'performance': 'Activity',
  'debugging': 'Bug',
  'profiling': 'Gauge',
  'tools': 'Wrench',
  'default': 'BookOpen'
}

export default function TopicIcon({ topic, size = 24, darkMode }) {
  const iconName = iconMap[topic?.toLowerCase()] || iconMap.default
  const IconComponent = LucideIcons[iconName] || LucideIcons.BookOpen
  const color = darkMode ? '#60a5fa' : '#3b82f6'

  return <IconComponent size={size} color={color} />
}
