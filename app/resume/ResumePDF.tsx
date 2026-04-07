import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { credits, resumeInfo } from '../data/resume';

Font.register({
  family: 'Helvetica Neue',
  fonts: [], // falls back to built-in Helvetica — clean and ATS-safe
});

const C = {
  black:      '#111111',
  dark:       '#222222',
  mid:        '#555555',
  muted:      '#888888',
  rule:       '#CCCCCC',
  bg:         '#FFFFFF',
  accent:     '#2B4C3F',
};

const s = StyleSheet.create({
  page: {
    backgroundColor: C.bg,
    paddingTop: 40,
    paddingBottom: 36,
    paddingHorizontal: 44,
    fontFamily: 'Helvetica',
    color: C.dark,
  },

  // ── Header ────────────────────────────────────────────────────────
  header: {
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: C.accent,
    paddingBottom: 10,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: C.black,
    letterSpacing: 0.5,
    marginBottom: 3,
    textAlign: 'left',
  },
  titleLine: {
    fontSize: 9,
    color: C.mid,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 7,
    textAlign: 'left',
  },
  contactLine: {
    fontSize: 8,
    color: C.muted,
    textAlign: 'left',
  },

  // ── Credit row ────────────────────────────────────────────────────
  creditRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 3.5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#EEEEEE',
  },
  creditLeft: {
    flex: 1,
    paddingRight: 12,
  },
  creditTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: C.black,
    marginBottom: 1,
  },
  creditRole: {
    fontSize: 8,
    color: C.mid,
  },
  creditRight: {
    alignItems: 'flex-end',
    minWidth: 110,
  },
  creditYear: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: C.dark,
    marginBottom: 1,
  },
  creditMeta: {
    fontSize: 7,
    color: C.muted,
    textAlign: 'right',
  },

  // ── Footer ────────────────────────────────────────────────────────
  footer: {
    position: 'absolute',
    bottom: 22,
    left: 44,
    right: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 7,
    color: C.muted,
  },
});

export default function ResumePDF() {
  const contactParts = [
    resumeInfo.email,
    resumeInfo.phone,
    resumeInfo.location,
    resumeInfo.website,
    resumeInfo.union,
  ].filter(Boolean) as string[];

  return (
    <Document
      title={`${resumeInfo.name} — Resume`}
      author={resumeInfo.name}
      subject="Production Design & Set Decoration Resume"
      keywords="production designer, set decorator, film, television, commercial"
    >
      <Page size="LETTER" style={s.page}>

        {/* Header */}
        <View style={s.header}>
          <Text style={s.name}>{resumeInfo.name}</Text>
          <Text style={s.titleLine}>{resumeInfo.title}</Text>
          <Text style={s.contactLine}>{contactParts.join(' | ')}</Text>
        </View>

        {/* All credits — chronological, most recent first */}
        {credits.map((c) => (
          <View key={c.title + c.year} style={s.creditRow}>
            <View style={s.creditLeft}>
              <Text style={s.creditTitle}>{c.title}</Text>
              <Text style={s.creditRole}>{c.role}</Text>
            </View>
            <View style={s.creditRight}>
              {c.year ? <Text style={s.creditYear}>{c.year}</Text> : null}
              <Text style={s.creditMeta}>{c.type}</Text>
              <Text style={s.creditMeta}>{c.studio}</Text>
            </View>
          </View>
        ))}

        {/* Footer */}
        <View style={s.footer} fixed>
          <Text style={s.footerText}>{resumeInfo.name}</Text>
          <Text style={s.footerText}>{resumeInfo.email}</Text>
        </View>

      </Page>
    </Document>
  );
}
