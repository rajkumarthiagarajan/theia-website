import React from 'react'
import BaseHead from './basehead'

const HeadWithSchema = ({ canonical }) => (
  <>
    <BaseHead canonical={canonical} />
    {/* JSON-LD for Theia IDE */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Theia IDE",
          "url": "https://theia-ide.org/#theiaide",
          "image": "https://theia-ide.org/static/TheiaIDE.png",
          "description": "Theia IDE is a modern, open-source, and flexible development environment (IDE) for developers on desktop and browser, featuring advanced AI-powered capabilities with full control over AI interactions.",
          "operatingSystem": "Linux, macOS, Windows",
          "applicationCategory": "DeveloperApplication",
          "applicationSubCategory": "IntegratedDevelopmentEnvironment",
          "softwareVersion": "1.55.0",
          "softwareRequirements": "Compatible with VS Code extensions",
          "author": {
            "@type": "Organization",
            "name": "Eclipse Foundation",
            "url": "https://www.eclipse.org/"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Eclipse Foundation",
            "url": "https://www.eclipse.org/"
          },
          "releaseNotes": "https://eclipsesource.com/blogs/2024/11/07/eclipse-theia-1-54-release-news-and-noteworthy/",
          "keywords": [
            "open-source IDE",
            "development environment",
            "AI-powered IDE",
            "VS Code extensions",
            "VS Code alternative"
          ],
          "license": "Eclipse Public License 2.0",
          "featureList": [
            "AI-powered",
            "Open-source",
            "Compatible with VS Code extensions",
            "Cross-platform support",
            "Runs in browser and desktop environments"
          ]
        })
      }}
    />
    {/* JSON-LD for Theia Platform */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Theia Platform",
          "url": "https://theia-ide.org/",
          "image": "https://theia-ide.org/static/TheiaPlatform.png",
          "description": "Theia Platform is an extensible open-source framework for building customizable integrated development environments (IDEs) for desktop and web.",
          "applicationCategory": "DeveloperApplication",
          "applicationSubCategory": "FrameworkApplication",
          "softwareRequirements": "Compatible with VS Code extensions",
          "operatingSystem": "Linux, macOS, Windows",
          "author": {
            "@type": "Organization",
            "name": "Eclipse Foundation",
            "url": "https://www.eclipse.org/"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Eclipse Foundation",
            "url": "https://www.eclipse.org/"
          },
          "keywords": [
            "custom IDE", "build custom IDE", "custom IDE Framework",
            "alternative VS Code", "alternative Code OSS", "build custom tool",
            "custom tool framework"
          ],
          "license": "Eclipse Public License 2.0",
          "featureList": [
            "AI-powered", "Open-source", "Build tailored IDEs and Tools",
            "Cross-platform support", "VS Code extension compatibility",
            "Desktop, browser and cloud support"
          ]
        })
      }}
    />
  </>
)

export default HeadWithSchema
