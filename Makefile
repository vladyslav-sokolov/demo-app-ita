IMAGE_TAG = v0.1.0
IMAGE = gcr.io/spinnaker-pe/demo:${IMAGE_TAG}

.PHONY: build
build:
	docker build -t ${IMAGE} .
push: build
	docker push ${IMAGE}
push-buildx:
	docker buildx build --platform linux/amd64 --push -t ${IMAGE} .
publish:
	helm install demo ita/ita -f helm/values.yaml --set container.image.tag=${IMAGE_TAG}
