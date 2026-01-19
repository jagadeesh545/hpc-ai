import { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Roadmap from './pages/Roadmap'
import Resources from './pages/Resources'
import Cheatsheets from './pages/Cheatsheets'
import Flashcards from './pages/Flashcards'
import Summaries from './pages/Summaries'

function App() {
  const [activeSection, setActiveSection] = useState('roadmap')
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [expandedPhases, setExpandedPhases] = useState(new Set())
  const [expandedTopics, setExpandedTopics] = useState(new Set())
  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedTopicId, setSelectedTopicId] = useState(null)

  // Load preferences from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('hpc-course-preferences')
    if (saved) {
      const prefs = JSON.parse(saved)
      setDarkMode(prefs.darkMode || false)
    }
  }, [])

  // Save preferences to localStorage
  const savePreferences = () => {
    const prefs = { darkMode }
    localStorage.setItem('hpc-course-preferences', JSON.stringify(prefs))
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    savePreferences()
  }

  const handleTopicSelect = (phaseId, topicId) => {
    // Expand the phase and topic in resources
    const newExpandedPhases = new Set(expandedPhases)
    newExpandedPhases.add(phaseId)
    setExpandedPhases(newExpandedPhases)
    
    const newExpandedTopics = new Set(expandedTopics)
    newExpandedTopics.add(topicId)
    setExpandedTopics(newExpandedTopics)
    
    // Store selected topic for scrolling
    setSelectedTopicId(topicId)
    
    // Switch to resources section
    setActiveSection('resources')
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'roadmap':
        return <Roadmap darkMode={darkMode} onTopicSelect={handleTopicSelect} />
      case 'resources':
        return (
          <Resources
            expandedPhases={expandedPhases}
            setExpandedPhases={setExpandedPhases}
            expandedTopics={expandedTopics}
            setExpandedTopics={setExpandedTopics}
            darkMode={darkMode}
            selectedTopicId={selectedTopicId}
            setSelectedTopicId={setSelectedTopicId}
          />
        )
      case 'cheatsheets':
        return <Cheatsheets darkMode={darkMode} />
      case 'flashcards':
        return <Flashcards darkMode={darkMode} />
      case 'summaries':
        return <Summaries darkMode={darkMode} />
      default:
        return <Roadmap darkMode={darkMode} />
    }
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="flex max-w-7xl mx-auto">
          {sidebarOpen && (
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} darkMode={darkMode} />
          )}
          <main className="flex-1 p-8">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
