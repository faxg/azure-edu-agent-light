 #!/bin/sh

. ./scripts/load_python_env.sh

echo 'Running "prepdocs.py"'

additionalArgs=""
if [ $# -gt 0 ]; then
  additionalArgs="$@"
fi

# Details see docs/data.ingestion.md // https://github.com/faxg/azure-edu-agent-light/blob/main/docs/data_ingestion.md
./.venv/bin/python ./app/backend/prepdocs.py './data/health' --category Healthcare --verbose $additionalArgs
./.venv/bin/python ./app/backend/prepdocs.py './data/bigdata-lecture' --category BigData --verbose $additionalArgs
./.venv/bin/python ./app/backend/prepdocs.py './data/azure-cloud-compliance' --category AzureCloudCompliance --verbose $additionalArgs
./.venv/bin/python ./app/backend/prepdocs.py './data/swiss-education' --category SwissEducation --verbose $additionalArgs


