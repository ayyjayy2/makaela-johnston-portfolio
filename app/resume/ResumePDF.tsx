import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { credits, resumeInfo, type Credit } from '../data/resume';

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
  accent:     '#2B4C3F',  // dark green — subtle, professional
};

const s = StyleSheet.create({
  page: {
    backgroundColor: C.bg,
    paddingTop: 52,
    paddingBottom: 52,
    paddingHorizontal: 52,
    fontFamily: 'Helvetica',
    color: C.dark,
  },

  // ── Header ────────────────────────────────────────────────────────
  header: {
    marginBottom: 28,
    borderBottomWidth: 2,
    borderBottomColor: C.accent,
    paddingBottom: 16,
  },
  name: {
    fontSize: 26,
    fontFamily: 'Helvetica-Bold',
    color: C.black,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  titleLine: {
    fontSize: 11,
    color: C.mid,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  contactItem: {
    fontSize: 9,
    color: C.muted,
  },

  // ── Section ───────────────────────────────────────────────────────
  section: {
    marginBottom: 22,
  },
  sectionHeading: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: C.accent,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    marginBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: C.rule,
    paddingBottom: 4,
  },

  // ── Credit row ────────────────────────────────────────────────────
  creditRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#EEEEEE',
  },
  creditLeft: {
    flex: 1,
    paddingRight: 12,
  },
  creditTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: C.black,
    marginBottom: 2,
  },
  creditRole: {
    fontSize: 9,
    color: C.mid,
  },
  creditRight: {
    alignItems: 'flex-end',
    minWidth: 120,
  },
  creditYear: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: C.dark,
    marginBottom: 1,
  },
  creditMeta: {
    fontSize: 8,
    color: C.muted,
    textAlign: 'right',
  },

  // ── Footer ────────────────────────────────────────────────────────
  footer: {
    position: 'absolute',
    bottom: 28,
    left: 52,
    right: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 7,
    color: C.muted,
  },
});

function CreditSection({ heading, items }: { heading: string; items: Credit[] }) {
  if (items.length === 0) return null;
  return (
    <View style={s.section}>
      <Text style={s.sectionHeading}>{heading}</Text>
      {items.map((c) => (
        <View key={c.title} style={s.creditRow}>
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
    </View>
  );
}

export default function ResumePDF() {
  const narrative  = credits.filter((c) => c.category === 'Narrative');
  const commercial = credits.filter((c) => c.category === 'Commercial');

  const contactParts = [
    resumeInfo.email    && `✉  ${resumeInfo.email}`,
    resumeInfo.phone    && `☎  ${resumeInfo.phone}`,
    resumeInfo.location && `⌖  ${resumeInfo.location}`,
    resumeInfo.website  && `⬡  ${resumeInfo.website}`,
    resumeInfo.union    && resumeInfo.union,
  ].filter(Boolean) as string[];

  return (
    <Document
      title={`${resumeInfo.name} — Resume`}
      author={resumeInfo.name}
      subject="Production Designer & Set Decorator Resume"
      keywords="production designer, set decorator, film, television, commercial"
    >
      <Page size="LETTER" style={s.page}>

        {/* Header */}
        <View style={s.header}>
          <Text style={s.name}>{resumeInfo.name}</Text>
          <Text style={s.titleLine}>{resumeInfo.title}</Text>
          <View style={s.contactRow}>
            {contactParts.map((part) => (
              <Text key={part} style={s.contactItem}>{part}</Text>
            ))}
          </View>
        </View>

        {/* Narrative credits */}
        <CreditSection heading="Television & Film" items={narrative} />

        {/* Commercial credits */}
        <CreditSection heading="Commercial & Brand" items={commercial} />

        {/* Footer */}
        <View style={s.footer} fixed>
          <Text style={s.footerText}>{resumeInfo.name}</Text>
          <Text style={s.footerText}>{resumeInfo.email}</Text>
        </View>

      </Page>
    </Document>
  );
}
