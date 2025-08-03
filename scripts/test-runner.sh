#!/bin/bash

# Test Runner Script for Care Steward Public
# This script provides convenient commands for running tests in different environments

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if dependencies are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed"
        exit 1
    fi
    
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Are you in the correct directory?"
        exit 1
    fi
    
    print_success "Dependencies check passed"
}

# Function to install dependencies if needed
install_dependencies() {
    print_status "Installing dependencies..."
    npm install
    print_success "Dependencies installed"
}

# Function to run all tests
run_all_tests() {
    print_status "Running all tests..."
    npm test
}

# Function to run tests in watch mode
run_watch_tests() {
    print_status "Running tests in watch mode..."
    npm run test:watch
}

# Function to run tests with coverage
run_coverage_tests() {
    print_status "Running tests with coverage..."
    npm run test:coverage
}

# Function to run tests for CI
run_ci_tests() {
    print_status "Running tests for CI environment..."
    npm run test:ci
}

# Function to run specific test file
run_specific_test() {
    local test_file=$1
    if [ -z "$test_file" ]; then
        print_error "Please specify a test file"
        echo "Usage: $0 specific <test-file>"
        exit 1
    fi
    
    print_status "Running specific test: $test_file"
    npm test -- "$test_file"
}

# Function to run tests matching pattern
run_pattern_tests() {
    local pattern=$1
    if [ -z "$pattern" ]; then
        print_error "Please specify a test pattern"
        echo "Usage: $0 pattern <test-pattern>"
        exit 1
    fi
    
    print_status "Running tests matching pattern: $pattern"
    npm test -- --testNamePattern="$pattern"
}

# Function to clear Jest cache
clear_cache() {
    print_status "Clearing Jest cache..."
    npm test -- --clearCache
    print_success "Cache cleared"
}

# Function to show test coverage report
show_coverage() {
    print_status "Generating coverage report..."
    npm run test:coverage
    
    if [ -d "coverage" ]; then
        print_success "Coverage report generated in coverage/ directory"
        print_status "Open coverage/lcov-report/index.html in your browser to view the report"
    else
        print_warning "No coverage directory found"
    fi
}

# Function to run linting
run_lint() {
    print_status "Running ESLint..."
    npm run lint
}

# Function to run type checking
run_type_check() {
    print_status "Running TypeScript type checking..."
    npx tsc --noEmit
}

# Function to run all checks (lint, type check, tests)
run_all_checks() {
    print_status "Running all checks..."
    
    print_status "1. Running ESLint..."
    npm run lint
    
    print_status "2. Running TypeScript type checking..."
    npx tsc --noEmit
    
    print_status "3. Running tests..."
    npm test
    
    print_success "All checks passed!"
}

# Function to show help
show_help() {
    echo "Care Steward Public - Test Runner"
    echo ""
    echo "Usage: $0 [command] [options]"
    echo ""
    echo "Commands:"
    echo "  all              Run all tests"
    echo "  watch            Run tests in watch mode"
    echo "  coverage         Run tests with coverage report"
    echo "  ci               Run tests for CI environment"
    echo "  specific <file>  Run specific test file"
    echo "  pattern <regex>  Run tests matching pattern"
    echo "  cache            Clear Jest cache"
    echo "  lint             Run ESLint"
    echo "  type-check       Run TypeScript type checking"
    echo "  check-all        Run lint, type check, and tests"
    echo "  install          Install dependencies"
    echo "  help             Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 all"
    echo "  $0 watch"
    echo "  $0 specific ProblemSolutionGraphic.test.tsx"
    echo "  $0 pattern 'renders'"
    echo "  $0 check-all"
}

# Main script logic
main() {
    local command=$1
    local option=$2
    
    # Check dependencies first
    check_dependencies
    
    case $command in
        "all")
            run_all_tests
            ;;
        "watch")
            run_watch_tests
            ;;
        "coverage")
            run_coverage_tests
            ;;
        "ci")
            run_ci_tests
            ;;
        "specific")
            run_specific_test "$option"
            ;;
        "pattern")
            run_pattern_tests "$option"
            ;;
        "cache")
            clear_cache
            ;;
        "lint")
            run_lint
            ;;
        "type-check")
            run_type_check
            ;;
        "check-all")
            run_all_checks
            ;;
        "install")
            install_dependencies
            ;;
        "help"|"-h"|"--help"|"")
            show_help
            ;;
        *)
            print_error "Unknown command: $command"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@" 