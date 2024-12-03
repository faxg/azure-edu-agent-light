
## How to setup for the Swiss Education Demo

After `azd up` follow the [customization guide](./customization.md) to enable custom features.

- Select the AOAI resource, add a new `GlobalStandard` deployment for `gpt-4o`

- Change the env variables.
see also : [login_and_acl.md](/docs/login_and_acl.md#setting-up-microsoft-entra-applications)

```bash
azd env set ENABLE_LANGUAGE_PICKER true
azd env set USE_SPEECH_INPUT_BROWSER true
azd env set USE_SPEECH_OUTPUT_AZURE true
azd env set AZURE_SPEECH_SERVICE_VOICE de-DE-SeraphinaMultilingualNeural
azd env set AZURE_OPENAI_CHATGPT_DEPLOYMENT gpt-4o
azd env set AZURE_OPENAI_CHATGPT_MODEL gpt-4o
azd env set AZURE_OPENAI_CHATGPT_DEPLOYMENT_SKU GlobalStandard
azd env set AZURE_OPENAI_CHATGPT_DEPLOYMENT_CAPACITY 10
azd env set AZURE_OPENAI_CHATGPT_DEPLOYMENT_VERSION 2024-05-13
azd env set USE_CHAT_HISTORY_BROWSER true
azd env set USE_CHAT_HISTORY_COSMOS true

azd env set AZURE_USE_AUTHENTICATION true
python ./scripts/manageacl.py --acl-action enable_acl
azd env set AZURE_ENFORCE_ACCESS_CONTROL true
azd env set AZURE_ENABLE_GLOBAL_DOCUMENT_ACCESS true
azd env set AZURE_ENABLE_UNAUTHENTICATED_ACCESS false

azd env set USE_USER_UPLOAD true

azd env set AZURE_AUTH_TENANT_ID <YOUR-TENANT-ID>



```
- Run `azd up` to reprovision everything 


### TODO. Enable GPT4V vision support
see: [/docs/gpt4v.md](/docs/gpt4v.md)
```bash
azd env set USE_FEATURE_INT_VECTORIZATION false
azd env set USE_GPT4V true
azd down --purge
azd up

```
