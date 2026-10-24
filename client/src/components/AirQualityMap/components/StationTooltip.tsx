import { useModuleTranslation } from '@lifeforge/localization'
import { Box, Flex, Stack, Text, Tooltip } from '@lifeforge/ui'

import { UNKNOWN_COLOR } from '@/utils/aqi'

function StationTooltip() {
  const { t } = useModuleTranslation()

  return (
    <Tooltip
      id="aqi-station"
      render={({ activeAnchor }) => {
        if (!activeAnchor) return null

        const name = activeAnchor.getAttribute('data-station-name')

        const aqi = activeAnchor.getAttribute('data-station-aqi')

        const time = activeAnchor.getAttribute('data-station-time')

        return (
          <Stack gap="xs">
            <Text weight="semibold">{name}</Text>
            <Flex align="center" gap="sm">
              <Box
                flexShrink="0"
                height="0.75rem"
                r="full"
                style={{
                  backgroundColor:
                    activeAnchor.getAttribute('data-station-color') ??
                    UNKNOWN_COLOR
                }}
                width="0.75rem"
              />
              <Text>
                {t('items.aqi')}: {aqi || '-'}
              </Text>
            </Flex>
            {time && (
              <Text color="muted" size="sm">
                {new Date(time).toLocaleString()}
              </Text>
            )}
          </Stack>
        )
      }}
      zIndex="30"
    />
  )
}

export default StationTooltip
