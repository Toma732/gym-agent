#!/bin/bash
# Fix responsive classes across all pages

# Replace old container classes with new responsive system
find app -name "*.tsx" -exec sed -i 's/max-w-\[402px\] mx-auto px-4/container-responsive/g' {} \;
find app -name "*.tsx" -exec sed -i 's/max-w-mobile mx-auto px-4 sm:px-6/container-responsive/g' {} \;

# Replace old nav padding with new main-content class
find app -name "*.tsx" -exec sed -i 's/pt-nav-top pb-24/main-content/g' {} \;
find app -name "*.tsx" -exec sed -i 's/pt-nav-top pb-16/main-content/g' {} \;

# Update section spacing
find app -name "*.tsx" -exec sed -i 's/ mb-8"/ section-spacing"/g' {} \;
find app -name "*.tsx" -exec sed -i 's/ mb-lg"/ section-spacing"/g' {} \;
find app -name "*.tsx" -exec sed -i 's/ mb-xl"/ content-spacing"/g' {} \;

# Update text colors for black background
find app -name "*.tsx" -exec sed -i 's/text-gray-700/text-gray-400/g' {} \;

echo "Done!"
