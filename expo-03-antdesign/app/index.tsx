import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Badge,
  Button,
  Card,
  List,
  NoticeBar,
  Switch,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native';
import { appSettings, noticeMessage, quickActions, statusBadges } from '../data';

export default function HomeScreen() {
  const [settings, setSettings] = useState<Record<string, boolean>>(
    Object.fromEntries(appSettings.map((setting) => [setting.id, setting.enabled]))
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <WingBlank>
          <Text style={styles.title}>Expo-03: Ant Design Mobile</Text>
          <Text style={styles.subtitle}>
            Exemplo de componentes da UI Kit Ant Design para apps mobile.
          </Text>

          <WhiteSpace size="lg" />

          <NoticeBar mode="closable">{noticeMessage}</NoticeBar>

          <WhiteSpace size="lg" />

          <Card>
            <Card.Header title="Acoes Rapidas" extra="UI Kit" />
            <Card.Body>
              <View style={styles.buttonGroup}>
                {quickActions.map((action, index) => (
                  <View key={action.id}>
                    <Button type={action.type}>{action.label}</Button>
                    {index < quickActions.length - 1 ? <WhiteSpace size="md" /> : null}
                  </View>
                ))}
              </View>
            </Card.Body>
          </Card>

          <WhiteSpace size="lg" />

          <List renderHeader="Configuracoes">
            {appSettings.map((setting) => (
              <List.Item
                key={setting.id}
                extra={
                  <Switch
                    checked={Boolean(settings[setting.id])}
                    onChange={(value) =>
                      setSettings((previousSettings) => ({
                        ...previousSettings,
                        [setting.id]: Boolean(value),
                      }))
                    }
                  />
                }
              >
                {setting.label}
              </List.Item>
            ))}
          </List>

          <WhiteSpace size="lg" />

          <List renderHeader="Status">
            {statusBadges.map((status) => {
              const isActive = Boolean(settings[status.settingId]);

              return (
                <List.Item
                  key={status.id}
                  extra={
                    <Badge
                      text={isActive ? status.activeLabel : status.inactiveLabel}
                      style={isActive ? styles.badgeOn : styles.badgeOff}
                    />
                  }
                >
                  {status.label}
                </List.Item>
              );
            })}
          </List>
        </WingBlank>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  scrollContent: {
    paddingVertical: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#172b4d',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#42526e',
    lineHeight: 20,
  },
  buttonGroup: {
    paddingVertical: 8,
  },
  badgeOn: {
    backgroundColor: '#2e7d32',
  },
  badgeOff: {
    backgroundColor: '#c62828',
  },
});
