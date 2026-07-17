#!/bin/bash
set -e

# Load environment variables from .env
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/../.env"

if [ -f "$ENV_FILE" ]; then
  export $(grep -v '^#' "$ENV_FILE" | xargs)
else
  echo "Error: .env file not found at $ENV_FILE"
  exit 1
fi

# Verify required variables
if [ -z "$AWS_ACCESS_KEY_ID" ] || [ -z "$AWS_SECRET_ACCESS_KEY" ] || [ -z "$AWS_ENDPOINT_URL" ]; then
  echo "Error: Missing required environment variables in .env"
  exit 1
fi

# Check if dist directory exists
if [ ! -d "$SCRIPT_DIR/../dist" ]; then
  echo "Error: dist/ directory not found. Run 'npm run build' first."
  exit 1
fi

# Build AWS CLI arguments
AWS_ARGS=(
  --endpoint-url "$AWS_ENDPOINT_URL"
  --region "$AWS_REGION"
)

# Add dryrun flag if specified
if [ "$1" = "--dryrun" ]; then
  AWS_ARGS+=("--dryrun")
  echo "DRY RUN - No files will be uploaded"
fi

echo "Deploying to Bunny Storage..."
echo "Bucket: $S3_BUCKET"
echo "Endpoint: $AWS_ENDPOINT_URL"
echo ""

# Sync dist/ to S3 bucket
aws s3 sync "$SCRIPT_DIR/../dist/" "s3://$S3_BUCKET/" "${AWS_ARGS[@]}"

echo ""
if [ "$1" = "--dryrun" ]; then
  echo "Dry run complete. No files were uploaded."
else
  echo "Deployment complete!"
fi
