'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Search, Star, Github } from 'lucide-react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'

interface Repository {
  id: number
  name: string
  full_name: string
  description: string
  stargazers_count: number
  forks_count: number
  html_url: string
  language: string
}

export default function GithubRepository() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([])
  const [displayedRepos, setDisplayedRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleCount, setVisibleCount] = useState(6) // Initial number of visible repos
  const containerRef = useRef<HTMLDivElement>(null) // Ref for animation container

  const fetchRepositories = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://api.github.com/users/blazertooth-99/repos')
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('ERROR 403 x_x')
        } else if (response.status === 404) {
          throw new Error('ERROR 404 x_x')
        } else {
          throw new Error('Failed to fetch repositories')
        }
      }
      const data = await response.json()
      setRepositories(data)
      setFilteredRepos(data)
      setDisplayedRepos(data.slice(0, 6)) // Show only the first 6 repos initially
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  useEffect(() => {
    const filtered = repositories.filter(repo =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredRepos(filtered)
    setDisplayedRepos(filtered.slice(0, visibleCount)) // Update displayed repos based on search term
  }, [searchTerm, repositories, visibleCount])

  const animateRepositories = () => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
      )
    }
  }

  const showMoreRepos = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 6, filteredRepos.length))
    setTimeout(() => animateRepositories(), 0)
  }

  const showLessRepos = () => {
    setVisibleCount(prevCount => Math.max(prevCount - 6, 6))
    setTimeout(() => animateRepositories(), 0)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 text-xl">{error}</p>
        <Button onClick={fetchRepositories} className="ml-4 p-2 bg-blue-500 text-white rounded-lg">
          Retry
        </Button>
      </div>
    )
  }

  return (
    <div className="container w-full mx-auto px-5 py-10 bg-custom-blue">
      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">My GitHub Repositories</h1>
      {/* <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search repositories..."
          className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div> */}
      <motion.div
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 items-stretch"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        ref={containerRef} // Reference for GSAP animation
      >
        {displayedRepos.map((repo) => (
          <motion.div
            key={repo.id}
            className="p-5 m-5 border dark:border-[#1E293B] border-[#CBD5E1] dark:bg-[#0F172A] bg-[#ffffff] hover:dark:bg-[#1E293B] hover:bg-[#CBD5E1] rounded-xl  items-stretch"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-5 items-stretch">
              <h2 className="text-xl font-semibold mb-2 text-black">

                  {repo.name}
              </h2>
              <p className="line-clamp-2 text-md text-gray-950">{repo.description || '-'}</p>
              <div className="flex items-center flex-wrap -m-3 pt-5">
                <div className="flex items-center">
                  <Github className="w-4 h-4 mr-1 text-gray-500" />
                </div>
                <div className="flex items-center">
                  <span className="ml-2 text-lightText transition-colors duration-500">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500">
                    {repo.full_name}
                  </a>
                  {repo.language}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center mt-8 space-x-4">
        {visibleCount < filteredRepos.length && (
          <Button onClick={showMoreRepos} className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Show More
          </Button>
        )}
        {visibleCount > 6 && (
          <Button onClick={showLessRepos} className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Show Less
          </Button>
        )}
      </div>
    </div>
  )
}
