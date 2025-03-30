DOCS := $(wildcard docs/*.md)
VERSION ?= v0.2

.PHONY: all spdx index version validate build clean

all: spdx index

spdx:
	@echo "Checking/Adding SPDX headers..."
	@for file in $(DOCS); do \
		grep -q "SPDX-License-Identifier" $$file || echo -e "<!-- SPDX-License-Identifier: CC-BY-SA-4.0 -->\n\n$$(cat $$file)" > $$file; \
	done

index:
	@echo "Generating DOCUMENTS.md..."
	@echo "# FreeFlow Document Index\n" > DOCUMENTS.md
	@echo "| ID | Title | Version | Last Updated |" >> DOCUMENTS.md
	@echo "|----|-------|---------|--------------|" >> DOCUMENTS.md
	@for file in $(DOCS); do \
		ID=$$(basename $$file .md | cut -d'-' -f3); \
		TITLE=$$(grep '^# ' $$file | head -n1 | sed 's/# //'); \
		LAST=$$(git log -1 --format="%ad" -- $$file || date +%Y-%m-%d); \
		printf "| %s | %s | %s | %s |\n" "$$ID" "$$TITLE" "$(VERSION)" "$$LAST" >> DOCUMENTS.md; \
	done

version:
	@echo "Bumping version to $(VERSION)..."
	@for file in $(DOCS); do \
		sed -i "s/^version:.*/version: $(VERSION)/" $$file; \
	done

validate:
	@echo "Validating doc front matters..."
	@for file in $(DOCS); do \
		grep -q "version:" $$file || echo "Missing version in $$file"; \
		grep -q "title:" $$file || echo "Missing title in $$file"; \
	done

build:
	mkdocs build

clean:
	rm -rf site